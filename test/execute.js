'use strict';

var creli = require('../dist/creli.js');

var ann = creli.annuity({
  ammount: 100000,
  interest: 0.03,
  perAnno: 4,
  T: 10,
});

console.log(ann.annuity());
console.log(ann.completeInterest());
