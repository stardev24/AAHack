'use strict';

describe('Component: BookingsComponent', function() {
  // load the controller's module
  beforeEach(module('appApp.bookings'));

  var BookingsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    BookingsComponent = $componentController('bookings', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
