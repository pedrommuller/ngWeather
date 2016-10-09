'use strict';

/**
 * @ngdoc function
 * @name ngWeatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngWeatherApp
 */
angular.module('ngWeatherApp')
  .controller('MainCtrl', function (geoLocator, openWeather, ppid) {
  	var vm = this;
  	vm.location ={};
	vm.info = {};
	vm.displayCityTextbox = false;
	

	vm.getWeatherFromBrowser = function(){
		return geoLocator.getCurrentPosition().then(function(value){
			return vm.getWeather(value.coords.latitude,value.coords.longitude);
		});			
	}

	vm.getWeatherFromTxt = function(){
		return vm.getWeather(vm.location.lat,vm.location.long);
	}

    vm.getWeather = function(lat,lon){
    	return openWeather.getByCoordinates({
			lat: lat,
			lon: lon,
			appid:ppid
		}, function(data){
				vm.info.main = data.main;
				vm.info.weather = data.weather[0];
				vm.info.icon = 'http://openweathermap.org/img/w/'+data.weather[0].icon + '.png';
				vm.info.location = data.name;
				console.log(data);
		},function(err){
			vm.errorMessage = err.data.message;
			console.log(err);
		});
    }

    vm.resetVars = function(){
    	vm.location ={};
		vm.info = {};
		vm.errorMessage = undefined;
    }

    vm.setDisplayCity = function(value){
    	vm.displayCityTextbox = value;
    	vm.resetVars();
    }

  });
