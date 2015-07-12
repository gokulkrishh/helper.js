
// Helper.js
// (c) 2015 Gokulakrishnan Kalaikovan
// Helper.js is freely distributable under the MIT license.

(function (window) {

	'use strict';


	//Add event listener to single element
	window.$addEvent = function(target, type, callback, useCapture) {

		if (!useCapture) useCapture = false;

		//Add event for one element
		if (target.length === 1) {
			target.addEventListener(type, callback, useCapture);
		}

		//For multiple elements
		else if (target.length > 1) {
			for (var i = 0; i < target.length; i++) {
				target[i].addEventListener(type, callback, useCapture);
			};
		}
	};

	//Add event listener to multiple element
	window.$getByClass = function(name) {
		return document.getElementsByClassName(name);
	};


})(window);