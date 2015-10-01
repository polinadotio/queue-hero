(function() {
  'use strict';

  angular.module('app.choice', [])
  .controller('ChoiceCtrl', ['ajaxFactory', 'profileFactory', '$state', function(ajaxFactory, profileFactory, $state) {
    var vm = this;

    //**toDo - fix hardcoded "username" to take username from token
    var username = 'darrin';

    //when controller loads, fire GET request for user info
    ajaxFactory.getProfileData(username)
      .then(function successCallback(response) {
        //will be executed if status code is 200-299
        var data = response.data;

        //save profile information into factory for future use
        profileFactory.setProfile(data);

      }, function errorCallback(response) {
        //will be exectcuted if status code is 300+
        var statusCode = response.status;

      });

      vm.hero = function(){
        $state.go('hero_location');
      };

      vm.requester = function(){
        $state.go('requester_task');
      };

  }]);

})();