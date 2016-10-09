'use strict';

describe('Service: geoLocator', function () {

  // load the service's module
  beforeEach(module('ngWeatherApp'));

  // instantiate service
  var geoLocator;
  beforeEach(inject(function (_geoLocator_) {
    geoLocator = _geoLocator_;
  }));

  it('should do something', function () {
    expect(!!geoLocator).toBe(true);
  });

});
