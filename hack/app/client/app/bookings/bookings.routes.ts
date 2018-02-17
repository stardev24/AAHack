'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('bookings', {
      url: '/bookings',
      template: '<bookings></bookings>'
    });
}
