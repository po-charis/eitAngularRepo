(function(angular) {
  'use strict';
angular.module('superModule', ['eitServices'])
  .controller('AddEitController', ['eitCrud' function InvoiceController(eitCrud) {
   	this.email = "arinze6@gmail.com";
    this.firstName = "Arinze";
    this.lastName = "Christopher";
    this.gender = 'female';
    this.dob = new Date("12/1/1992");

    // this.total = function total(outCurr) {
    //   return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
    // };
    // this.pay = function pay() {
    //   window.alert('Thanks!');
    // };
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
