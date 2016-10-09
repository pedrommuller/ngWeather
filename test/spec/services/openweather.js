'use strict';

describe('Service: openWeather', function () {

  // load the service's module
  beforeEach(module('ngWeatherApp'));

  // instantiate service
  var openWeather;
  beforeEach(inject(function (_openWeather_) {
    openWeather = _openWeather_;
  }));

  it('should do something', function () {
    expect(!!openWeather).toBe(true);
  });

});
