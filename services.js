(function(angular) {
  'use strict';
angular.module('services', [])
  .factory('eitCrud', function() {
    
    //this list contains all info about all EIT
    var eitRepo = [];
    

    //the variable id returns gets the id of the last item in the arrayu
    

    //this function pushes data from the form into the list eitRepo
    var addEit = function(id,email, firstname, lastname, gender, dob) {
      eitRepo.push({
        id:id,
        email: email,
        firstname: firstname,
        lastname: lastname,
        gender: gender,
        dob: dob
      });
      console.log("Record saved successfully");
    };

    //this function returns the list of all the Eits.
    var viewAllEit = function(){
      return eitRepo;
    }


    return {
      eitRepo:eitRepo,
      addEit: addEit,
      viewAllEit: viewAllEit
    };
  });
})(window.angular);

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/