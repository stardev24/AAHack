'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './bookings.routes';

export class BookingsComponent {
  $http;
  socket;
  bookings = [];
  passangers = [];
  newThing = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/data/testing').then(response => {
      let data = JSON.parse(response.data.data)
      this.bookings = data;
      this.passangers = data[0].BookingPassengers.BookingPassenger
      console.log("response is --->",response)
    });
  }
}

export default angular.module('appApp.bookings', [uiRouter])
  .config(routes)
  .component('bookings', {
    template: require('./bookings.html'),
    controller: BookingsComponent
  }).controller('BookingsComponent', BookingsComponent)
  .name;
