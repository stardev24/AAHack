'use strict';
const angular = require('angular');

export class MyBookingsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('appApp.MyBookings', [])
  .component('MyBookings', {
    template: './mybookings.html',
    bindings: { message: '<' },
    controller: MyBookingsController
  })
  .name;
