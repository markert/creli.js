/**
 * @name    annuity
 * @version 1.0.0 | November 13th 2015
 * @author  Florian Markert
 * @license MIT
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Creli = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {

  account: require('./src/account'),
  annuity: require('./src/annuity')

};

},{"./src/account":2,"./src/annuity":3}],2:[function(require,module,exports){
'use strict';

var account = function account(params) {
  var _balance = 0 || params.balance;
  var _interest = {};
  _interest.debit = 0 || params.debit;
  _interest.credit = 0 || params.credit;
  var _operations = [];
  var tickAccount = function tickAccount(divider) {
    if (_balance >= 0) {
      var diff = _balance * _interest.credit / divider;
    } else {
      var diff = -(_balance * _interest.debit) / divider;
    }
    _balance += diff;
  };

  var self = {
    operation: function operation(p) {
      if (!p || !p.ammount) {
        return false;
      }
      _balance += p.ammount;
      _operations.push(p);
      return true;
    },
    balance: function balance() {
      return _balance;
    },
    interest: function interest() {
      return _interest;
    },
    tick: function tick(period) {
      tickAccount(period);
    },
    operations: function operations() {
      return _operations;
    }
  };
  return self;
};

module.exports = account;

},{}],3:[function(require,module,exports){
'use strict';

var annuity = function annuity(params) {

  var K = params.ammount | 100000;
  var i = params.interest || 0.05;
  var n = params.perAnno || 12;
  var T = params.years || 10;
  var q = 1 + i / n;
  var qnt = Math.pow(q, n * T);

  var self = {
    annuity: function annuity() {
      var A = K * qnt * (q - 1) / (qnt - 1);
      return A;
    },
    rate: function rate(params) {},
    time: function time(params) {
      var time = Math.log(1 + i / T) / Math.log(1 + i / n);
      return tine;
    },
    completeInterest: function completeInterest() {
      var Z = K * (qnt * ((q - 1) * n * T - 1) + 1) / (qnt - 1);
      return Z;
    },
    tickInterest: function tickInterest(params) {
      if (!params || !params.debt || !params.step) {
        return false;
      }
      var Tk = params.T || T;
      Zk = K * i * (Math.pow(q, Tk) - Math.pow(q, params.step - 1)) / (Math.pow(q, Tk) - 1);
      return Zk;
    },
    restDebt: function restDebt(params) {
      if (!params || !params.annuity || !params.step) {
        return false;
      }
      var ann = params.annuity;
      var k = params.step;
      var R = K * Math.pow(q, k) - ann * (Math.pow(q, k) - 1) / (q - 1);
      return R;
    },
    interest: function interest(params) {
      if (!params || !params.debt) {
        return false;
      }
      return params.debt * i / n;
    },
    changeParams: function changeParams(params) {
      K = params.ammount || K;
      i = params.interest || i;
      n = params.perAnno || n;
      T = params.years || T;
      q = 1 + i / n;
      qnT = Math.pow(q, n * T);
    }

  };

  return self;
};

module.exports = annuity;

},{}]},{},[1])(1)
});