'use strict'

function Order(email, first, last, address, cc) {
  this.firstName = first;
  this.lastName = last;
  this.email = email;
  this.address = address;
  this.cc = cc;
};

function convertForm() {
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var email = document.getElementById('email');
  var address = document.getElementById('address');
  var cc = document.getElementById('cc#')
  Order(email, firstName, lastName, address, cc);  
}
