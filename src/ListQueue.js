/*

Queue, a JavaScript FIFO Queue.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of Queue.

Queue is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Queue is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Queue.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/

/*

	FIFO(First In First Out) Queue Data Structure

*/

function Queue(options) {
	this.maxSize = options.maxSize;

	this.length = 0;
	this.HEAD = null;
	this.TAIL = null;

	if (options && Array.isArray(options.data)) {
		this.constructQueue(options.data, options.constructReverse);
	}
}

Queue.prototype.constructor = Queue;

Queue.prototype.constructNode = function (d) {
	return {
		next: null,
		prev: null,
		d: d,
	};
};

Queue.prototype.constructQueue = function (data, constructReverse) {
	var len = data.length;
	var i;

	if (!constructReverse) {
		for (i = 0; i < len; i++) {
			this.enqueue(data[i]);
		}
	} else {
		for (i = len - 1; i >= 0; i--) {
			this.enqueue(data[i]);
		}
	}
};

Queue.prototype.enqueue = function (d) {
	var node = this.constructNode(d);
	if (this.HEAD) {
		node.next = this.HEAD;
		this.HEAD.prev = node;
		this.HEAD = node;
	} else {
		this.HEAD = node;
		this.TAIL = node;
	}

	if (this.length + 1 > this.maxSize) {
		this.dequeue();
	}

	return ++this.length;
};

Queue.prototype.dequeue = function () {
	if (this.TAIL) {
		if (this.TAIL === this.HEAD) {
			this.HEAD = null;
		}
		var temp = this.TAIL;
		this.TAIL = this.TAIL.prev;
		if (this.TAIL) {
			this.TAIL.next = null;
		}
		temp.prev = null;
		this.length--;
		return temp.d;
	}
	// or return undefined
};

Queue.prototype.isEmpty = function () {
	if (this.HEAD) {
		return false;
	}
	return true;
};

Queue.prototype.peak = function () {
	return this.TAIL?.d;
};

Queue.prototype.getData = function () {
	var iter = this.HEAD;
	var arr = new Array(this.length);
	var count = 0;
	while (iter != null) {
		arr[count++] = iter.d;
		iter = iter.next;
	}

	return arr;
};

Queue.prototype.getSize = function () {
	return this.length;
};

Queue.prototype.empty = function () {
	this.HEAD = null;
	this.TAIL = null;
	this.length = 0;
};

export default Queue;
