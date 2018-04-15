(function(angular) {
  'use strict';
angular.module('services', [])
  .factory('eitCrud', function() {
    
    //this list contains info about all EIT
    var eitRepo = [];
    var eitId;
    var oneEit;
    var eitToEdit;
    var eitToEditArray;
    
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
    };

    //this function returns the list of all the Eits.
    var viewAllEit = function(){
      return eitRepo;
    };

    var setAnEit = function(id){
      eitId = id;
      // console.log(eitId);
    };

     var setEitToEdit = function(id){
      eitToEdit = id;
    };

    var getAnEit= function(){
        for(var counter=0; counter< eitRepo.length; counter++){
            if( eitId == eitRepo[counter].id){
              oneEit = eitRepo[counter];
              // console.log(oneEit);
              return oneEit;

            }
        }
      
    };

    var getEitToEdit = function(){
      if(eitToEdit){
        for(var counter=0; counter< eitRepo.length; counter++){
            if( eitToEdit == eitRepo[counter].id){
              eitToEditArray = eitRepo[counter];
              return eitToEditArray;

            }
        }
      }

    };

    var updateEit = function(id, data){
      for(var counter=0; counter < eitRepo.length; counter++){
        if(id == eitRepo[counter].id){
          eitRepo[counter] = data;
        }
      }
    };

    return {
     
      eitRepo:eitRepo,
      addEit: addEit,
      viewAllEit: viewAllEit,
      getAnEit:getAnEit,
      oneEit:oneEit,
      setAnEit:setAnEit,
      updateEit:updateEit,
      getEitToEdit:getEitToEdit,
      eitToEdit:eitToEdit,
      setEitToEdit:setEitToEdit,
    };
  });
})(window.angular);

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/