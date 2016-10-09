'use strict';

/**
 * @ngdoc service
 * @name ngWeatherApp.geoLocator
 * @description
 * # geoLocator
 * Service in the ngWeatherApp.
 */
angular.module('ngWeatherApp')
  .service('geoLocator', function ($q,$window) {
    
    function getCurrentPosition() {
        var deferred = $q.defer();

        if (!$window.navigator.geolocation) {
            deferred.reject('Geolocation not supported.');
        } else {
            $window.navigator.geolocation.getCurrentPosition(
                function (position) {
                    deferred.resolve(position);
                },
                function (err) {
                    deferred.reject(err);
                });
        }

        return deferred.promise;
    }

    return {
        getCurrentPosition: getCurrentPosition
    };

  });
