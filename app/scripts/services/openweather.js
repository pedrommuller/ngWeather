'use strict';

/**
 * @ngdoc service
 * @name ngWeatherApp.openWeather
 * @description
 * # openWeather
 * Service in the ngWeatherApp.
 */
angular.module('ngWeatherApp')
  .service('openWeather', function ($resource) {
    //http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=8f72a2599dd7e488ef9d12633464c33a
  	return $resource('', {}, {
      getByCoordinates: {
        method: 'GET',
        params: {lat: '@lat', lon: '@lon',appid:'@appid'},
        url: 'http://api.openweathermap.org/data/2.5/weather'
      }
  	});
  });
