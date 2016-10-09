'use strict';

/**
 * @ngdoc directive
 * @name ngWeatherApp.directive:clickAndDisable
 * @description
 * # clickAndDisable
 */
angular.module('ngWeatherApp')
  .directive('clickAndDisable', function ($timeout) {
    return {
	    scope: {
	        clickAndDisable: '&',
	        afterEnable: '&'
	    },
	    restrict: 'A',
	    link: function (scope, element) {

	        function enable() {
	            $timeout(function() {
	                element.prop('disabled', false);
                    if (scope.afterEnable) {
                        scope.afterEnable();
                    }
	            }, 800);
	        }
	        function onClick() {
	            element.prop('disabled', true);
	            try {
	                var promise = scope.clickAndDisable();
	                if (promise) {
	                    promise = promise.$promise || promise;
	                }
	                if (!promise || !angular.isFunction(promise.finally)) {
	                    enable();
	                    return;
	                }
	                promise.finally(function() {
	                    enable();
	                });
	            } catch (e) {
	                enable();
	                throw e;
	            }
	        }
	        function destroy() {
	            element.unbind("click", onClick);
	        }
	        element.bind('click', onClick);
	        scope.$on('$destroy', destroy);
		}
	};
  });
