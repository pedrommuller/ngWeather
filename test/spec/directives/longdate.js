'use strict';

describe('Directive: longDate', function () {

  // load the directive's module
  beforeEach(module('ngWeatherApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<long-date></long-date>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the longDate directive');
  }));
});
