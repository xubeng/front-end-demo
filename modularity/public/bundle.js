(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

	function f1() {
		console.log("f1");
	}

	function f2() {
		console.log("f2");
	}

	f1();
	f2();

})));
