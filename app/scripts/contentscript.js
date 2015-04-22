'use strict';

window.addEventListener("load", function() {
	var app = angular.module('James', []);

	var html = document.querySelector('html');
	html.setAttribute('ng-app', '');
	html.setAttribute('ng-csp', '');

	var viewport = document.getElementById('viewport');
	viewport.setAttribute('ng-controller', 'MainController');
	app.controller('MainController', function ($scope) {});

	var myDirective = document.createElement('div');
	myDirective.setAttribute('my-directive', '');
	viewport.appendChild(myDirective);

	app.directive('myDirective', function() {
		return {
			restrict: 'EA',
			replace: true,
			template: '<a href="http://jamesbitte.de"> Visit James</a>'
		};
	});

	angular.bootstrap(html, ['James'], []);
});

