(function(angular) {
  'use strict';
var eitController = angular.module('superModule', ['services']);
  
eitController.controller('AddEitController', ['eitCrud', function AddEitController(eitCrud) {
	this.email = "arinze6@gmail.com";
	this.firstName = "Arinze";
	this.lastName = "Christopher";
	this.gender = 'female';
	this.dob = new Date("12/1/1992");
	this.eitRepo = eitCrud.eitRepo;
	this.editEit = true;

    //this function returns the id of the last item in the list.
    
	this.getId = function getId(repo){
      var length =  this.eitRepo.length;
      if(length == 0){
        id=0;
        return id;
      }
      var id = this.eitRepo[(length-1)].id;
      return id;
    }
	



	this.addEit = function addEit(id, email, firstname, lastname, gender, dob){
		this.id = this.getId(this.eitRepo) + 1;
		// console.log(this.id);
		// console.log(eitCrud.oneEit);
		return eitCrud.addEit(this.id, this.email, this.firstName, this.lastName, this.gender, this.dob);
	};



}]);

eitController.controller('viewAllEitController', ['eitCrud', function viewAllEitController(eitCrud) {
	this.viewAllEit = function viewAllEit(){
		return eitCrud.viewAllEit();
	}

	this.setAnEit = function setAnEit(id){
		// console.log(id);
		return eitCrud.setAnEit(id);
		
	}
	



}]);


eitController.controller('viewAnEitController', ['eitCrud', function viewAnEitController(eitCrud) {
	this.getAnEit = function getAnEit(){
		// var oneEit;
		// oneEit = {id:"Arinze", email:"as", lastname:"ada", gender:"m"};
		//console.log(eitCrud.getAnEit());
		return eitCrud.getAnEit();
	}

}]);

})(window.angular);

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
// http://idea.iteblog.com/key.php
// http://idea.imsxm.com/
// http://www.aku.vn/idea
