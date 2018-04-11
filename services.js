(function(angular) {
  'use strict';
angular.module('services', [])
  .factory('eitCrud', function() {
    
    //this list contains all info about all EIT
    var eitRepo = [];
    var eitId;
    var oneEit;
    
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
      // console.log("Record saved successfully");
    };

    //this function returns the list of all the Eits.
    var viewAllEit = function(){
      return eitRepo;
    };

    var setAnEit = function(id){
      eitId = id;
      // console.log(eitId);
    };

    var getAnEit= function(){
      // console.log("seen");
      for(var counter=0; counter< eitRepo.length; counter++){
          if( eitId == eitRepo[counter].id){
            oneEit = eitRepo[counter];
            // console.log(oneEit);
            return oneEit;

          }
      }
    }

    return {
     
      eitRepo:eitRepo,
      addEit: addEit,
      viewAllEit: viewAllEit,
      getAnEit:getAnEit,
       oneEit:oneEit,
       setAnEit:setAnEit,
    };
  });
})(window.angular);

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/