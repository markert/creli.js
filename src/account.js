'use strict';

// account function

var account = function (params) {
  var balance = 0 || params.balance;
  var interest = {};
  interest.debit = 0 || params.debit;
  interest.credit = 0 || params.credit;
  var operations = [];
  var tickAccount = function (divider) {
    if (balance >= 0) {
      var diff = (balance * interest.credit) / divider;
    } else {
      var diff = -(balance * interest.debit) / divider;
    }
    balance += diff;
  };

  var self = {
    operation: function (p) {
      if (!p || !p.ammount) {
        return false;
      }
      balance += p.ammount;
      operations.push(p);
      return true;
    },
    balance: function () {
      return balance;
    },
    interest: function () {
      return interest;
    },
    tick: function (period) {
      tickAccount(period);
    },
    operations: function () {
      return operations;
    }
  };
  return self;
}

module.exports = account;
