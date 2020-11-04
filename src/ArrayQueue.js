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
	this.options = options;

	this.maxSize = options?.maxSize;
	this.initialSize = options?.initialSize || 100;

	this.length = this.initialSize;
	this.queue = new Array(this.length);
	this.front = 0;
	this.rear = -1;

	if (Array.isArray(options?.data)) {
		this.constructQueue(options.data, options.constructReverse);
	}

	delete this.options?.data;
}

Queue.prototype.constructor = Queue;

Queue.prototype.constructQueue = function (data, constructReverse) {
	const len = data.length;

	if (!constructReverse) {
		for (let i = 0; i < len; i++) {
			this.enqueue(data[i]);
		}
	} else {
		for (let i = len - 1; i >= 0; i--) {
			this.enqueue(data[i]);
		}
	}
};

Queue.prototype.enqueue = function (data) {
	if (data === null || data === undefined) {
		return false;
	}

	if (this.rear === this.length - 1) {
		this.resize();
	}
	this.queue[++this.rear] = data;

	if (this.rear - this.front + 1 > this.maxSize) {
		this.dequeue();
	}

	return this.rear - this.front + 1;
};

Queue.prototype.dequeue = function () {
	if (this.front <= this.rear) {
		return this.queue[this.front++];
	}
	// or return undefined
};

Queue.prototype.resize = function () {
	let tempQueue;
	if (this.rear - this.front + 1 < this.length / 2) {
		// only shift
		tempQueue = this.queue;
	} else {
		// make new array
		this.length *= 2;
		tempQueue = new Array(this.length);
	}
	let _front = this.front;
	for (let i = 0; i <= this.rear - this.front; i++) {
		tempQueue[i] = this.queue[_front++];
	}

	this.rear = this.rear - this.front;
	this.front = 0;
	this.queue = tempQueue;
};

Queue.prototype.isEmpty = function () {
	if (this.front > this.rear) {
		return true;
	}
	return false;
};

Queue.prototype.peak = function () {
	if (this.front <= this.rear) {
		return this.queue[this.rear];
	}
	// or return undefined
};

Queue.prototype.getData = function () {
	const len = this.rear - this.front + 1;
	const arr = new Array(len);

	let _front = this.front;
	for (let i = 0; i < len; i++) {
		arr[i] = this.queue[_front++];
	}

	return arr;
};

Queue.prototype.setData = function (data) {
	this.empty();
	this.constructQueue(data, this.options?.constructReverse);
};

Queue.prototype.getSize = function () {
	return this.rear - this.front + 1;
};

Queue.prototype.empty = function () {
	this.front = 0;
	this.rear = -1;
};

Queue.prototype.wipe = function () {
	this.length = this.initialSize;
	this.stack = new Array(this.length);
	this.front = 0;
	this.rear = -1;
};

export default Queue;
