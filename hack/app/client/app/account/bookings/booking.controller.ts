'use strict';
const angular = require('angular');

// @flow
interface Booking {
  data: any[];
}

export default class BookingController {
  $http;
  socket;
  bookings = [];
  newThing = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    this.$http.get('/api/users/details/'+window.uid).then(response => {
      this.bookings = response.data;
    });
  }


}




