window.onload = function () {
	console.log("onload");

	var rawData = [
		// { low: 2, high: 4 },
		// { low: 1, high: 8 },
		// { low: 3, high: 4 },
		// { low: 1, high: 2 },
		// { low: 5, high: 7 },
		// { low: 2, high: 7 },
		// { low: 4, high: 6 },
		// { low: 5, high: 8 },
		// { low: 3, high: 9 },
		// { low: 0, high: 5 },
		// { low: 2, high: 9 },
		// { low: 0, high: 6 },
		// { low: 1, high: 6, d: 3 },
		// //
		// { low: 1, high: 6, d: 3 },
		// //
		// { low: 3, high: 8 },
		// { low: 7, high: 9 },
		// { low: 8, high: 9 },
		// //
		// { low: 8, high: 10 },
		// //
		// { low: 6, high: 7 },
		// { low: 6, high: 8 },
		// { low: 6, high: 9 },
		// { low: 4, high: 8 },
		// { low: 4, high: 9 },

		// different set
		{ low: 7, high: 9 },
		{ low: 10, high: 12 },
		{ low: 1, high: 3 },
	];

	window.queue = new Queue.default({ data: rawData });
	var $contentBody = document.getElementsByClassName("content-body")[0];
};
