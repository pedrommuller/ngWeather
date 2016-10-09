'use strict';

describe('Directive: clickAndDisable', function () {

  // load the directive's module
  beforeEach(module('ngWeatherApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<click-and-disable></click-and-disable>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the clickAndDisable directive');
  }));
});
