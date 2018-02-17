'use strict';

describe('Directive: bookings', function() {
  // load the directive's module and view
  beforeEach(module('appApp.bookings'));
  beforeEach(module('app/bookings/bookings.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<bookings></bookings>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the bookings directive');
  }));
});
