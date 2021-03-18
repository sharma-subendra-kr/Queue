/** @license Queue

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
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Queue"] = factory();
	else
		root["Queue"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ArrayQueue", function() { return /* reexport */ ArrayQueue; });
__webpack_require__.d(__webpack_exports__, "ListQueue", function() { return /* reexport */ ListQueue; });

// CONCATENATED MODULE: ./src/ListQueue.js
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
  this.maxSize = options === null || options === void 0 ? void 0 : options.maxSize;
  this.length = 0;
  this.HEAD = null;
  this.TAIL = null;

  if (Array.isArray(options === null || options === void 0 ? void 0 : options.data)) {
    this.constructQueue(options.data, options.constructReverse);
  }
}

Queue.prototype.constructNode = function (d) {
  return {
    next: null,
    prev: null,
    d: d
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
  } // or return undefined

};

Queue.prototype.isEmpty = function () {
  if (this.HEAD) {
    return false;
  }

  return true;
};

Queue.prototype.peek = function () {
  var _this$TAIL;

  return (_this$TAIL = this.TAIL) === null || _this$TAIL === void 0 ? void 0 : _this$TAIL.d;
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

/* harmony default export */ var ListQueue = (Queue);
// CONCATENATED MODULE: ./src/ArrayQueue.js
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
function ArrayQueue_Queue(options) {
  var _this$options;

  this.options = options;
  this.maxSize = options === null || options === void 0 ? void 0 : options.maxSize;
  this.initialSize = (options === null || options === void 0 ? void 0 : options.initialSize) || 100;
  this.length = this.initialSize;
  this.queue = new Array(this.length);
  this.front = 0;
  this.rear = -1;

  if (Array.isArray(options === null || options === void 0 ? void 0 : options.data)) {
    this.constructQueue(options.data, options.constructReverse);
  }

  (_this$options = this.options) === null || _this$options === void 0 ? true : delete _this$options.data;
}

ArrayQueue_Queue.prototype.constructQueue = function (data, constructReverse) {
  var len = data.length;

  if (!constructReverse) {
    for (var i = 0; i < len; i++) {
      this.enqueue(data[i]);
    }
  } else {
    for (var _i = len - 1; _i >= 0; _i--) {
      this.enqueue(data[_i]);
    }
  }
};

ArrayQueue_Queue.prototype.enqueue = function (data) {
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

ArrayQueue_Queue.prototype.dequeue = function () {
  if (this.front <= this.rear) {
    return this.queue[this.front++];
  } // or return undefined

};

ArrayQueue_Queue.prototype.resize = function () {
  var tempQueue;

  if (this.rear - this.front + 1 < this.length / 2) {
    // only shift
    tempQueue = this.queue;
  } else {
    // make new array
    this.length *= 2;
    tempQueue = new Array(this.length);
  }

  var _front = this.front;

  for (var i = 0; i <= this.rear - this.front; i++) {
    tempQueue[i] = this.queue[_front++];
  }

  this.rear = this.rear - this.front;
  this.front = 0;
  this.queue = tempQueue;
};

ArrayQueue_Queue.prototype.isEmpty = function () {
  if (this.front > this.rear) {
    return true;
  }

  return false;
};

ArrayQueue_Queue.prototype.peek = function () {
  if (this.front <= this.rear) {
    return this.queue[this.rear];
  } // or return undefined

};

ArrayQueue_Queue.prototype.getData = function () {
  var len = this.rear - this.front + 1;
  var arr = new Array(len);
  var _front = this.front;

  for (var i = 0; i < len; i++) {
    arr[i] = this.queue[_front++];
  }

  return arr;
};

ArrayQueue_Queue.prototype.setData = function (data) {
  var _this$options2;

  this.empty();
  this.constructQueue(data, (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.constructReverse);
};

ArrayQueue_Queue.prototype.getSize = function () {
  return this.rear - this.front + 1;
};

ArrayQueue_Queue.prototype.empty = function () {
  this.front = 0;
  this.rear = -1;
};

ArrayQueue_Queue.prototype.wipe = function () {
  this.length = this.initialSize;
  this.stack = new Array(this.length);
  this.front = 0;
  this.rear = -1;
};

/* harmony default export */ var ArrayQueue = (ArrayQueue_Queue);
// CONCATENATED MODULE: ./src/index.js
/** @license Queue

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




/***/ })
/******/ ]);
});