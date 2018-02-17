'use strict';
const angular = require('angular');
import MyBookingsController from './MyBookings.controller';

export default angular.module('airAsiaAssignmentApp.bookings', [])
  .controller('MyBookingsController', MyBookingsController)
  .name;
