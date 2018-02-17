'use strict';
const angular = require('angular');

export default angular.module('appApp.bookings', [])
  .directive('bookings', function() {
    return {
      template: require('./bookings.html'),
      restrict: 'EA',
      link: function(scope, element, attrs) {
      	
      }
    };
  })
  .name;
