window.onload = function () {
	console.log("onload");

	var rawData = [1, 2, 3];

	window.queue = new Queue.ArrayQueue({ data: rawData });
	var $contentBody = document.getElementsByClassName("content-body")[0];
};
