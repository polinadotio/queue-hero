(function() {
  'use strict';

  angular.module('app')
  .factory('ajaxFactory', ['$http', function($http) {
    var serverUrl = 'http://localhost:3000';
    var ajaxObj = {};

    ajaxObj.getProfileData = function(facebookId) {
      return $http({
        method: 'GET',
        url: serverUrl + '/choice',
        params: { facebookId: facebookId }
      });
    };

    ajaxObj.facebookAuth = function(type) {
      return $http({
        method: 'GET',
        url: serverUrl + '/auth/facebook',
        params: {type: type}
      });
    };

    ajaxObj.orderFulfilled = function(transactionId) {
      console.log(serverUrl);
      console.log('About to make post request that order was fulfilled');
      return $http({
        method: 'POST',
        url: serverUrl + '/requester/order/complete',
        data: { 'transactionId': transactionId }
      });
    };

    ajaxObj.isOrderComplete = function(transactionId) {
      return $http({
        method: 'GET',
        url: serverUrl + '/hero/order/details',
        params: { transactionId: transactionId }
      });
    };

    ajaxObj.isOrderAccepted = function(transactionId) {
      return $http({
        method: 'POST',
        url: serverUrl + '/requester/order/details',
        data: { 'transactionId': 1 }
      });
    };

    ajaxObj.postSignUp = function(user) {
      return $http({
        method: 'POST',
        url: serverUrl + '/signup',
        data: { user: user }
      });
    };

    ajaxObj.getActiveShops = function(area) {
      return $http({
        method: 'GET',
        url: serverUrl + '/requester/task',
        params: { area: area }
      });
    };

    ajaxObj.getVenuesAtHeroLocation = function(lat, long) {
      return $http({
        method: 'GET',
        url: serverUrl + '/hero/location',
        // this param should identify the location (lat, long) of hero
        // server returns list of vendors for hero to confirm
        params: {
          lat: lat,
          long: long
        }
      });
    };

    ajaxObj.getOpenRequests = function(location) {
      return $http({
        method: 'GET',
        url: serverUrl + '/hero/task',
        //this param should uniquely identify the restaurant
        params: { location: location }
      });
    };

    ajaxObj.confirmRequest = function(transactionId) {
      return $http({
        method: 'POST',
        url: serverUrl + '/hero/task',
        data: { transactionId: transactionId }
      });
    };

    ajaxObj.sendOrder = function(order) {
      return $http({
        method: 'POST',
        url: serverUrl + '/requester/task',
        data: { order: order }
      });
    };

    ajaxObj.rateRequester = function(rating, requester) {
      return $http({
        method: 'POST',
        url: serverUrl + '/hero/order/complete',
        data: { rating: rating, requester: requester }
      });
    };

    ajaxObj.rateHero = function(rating, hero) {
      return $http({
        method: 'POST',
        url: serverUrl + '/requester/order/rate',
        data: { rating: rating, hero: hero }
      });
    };


    return ajaxObj;

  }]);

})();
