'use strict';

/**
 * @ngdoc directive
 * @name ngWeatherApp.directive:longDate
 * @description
 * # longDate
 */
angular.module('ngWeatherApp')
  .directive('longDate', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	var now = new Date();
	  	var formatedDate = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()))
	  		.toLocaleString('en-uk',
	  			{timeZone:'UTC', weekday: "long", year: "numeric", month: "long", day: "numeric"}
		    );
        element.attr('class','width-header-element');
        element.attr('id','big-date-text');
        element.text(formatedDate);

      }
    };
  });
