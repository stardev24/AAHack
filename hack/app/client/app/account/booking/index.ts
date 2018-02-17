'use strict';
const angular = require('angular');
import BookingController from './booking.controller';


console.log("----------------->debug",BookingController)
export default angular.module('airAsiaAssignmentApp.bookings', [])
  .controller('BookingController', BookingController)
  .name;
