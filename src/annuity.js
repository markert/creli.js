'use strict';

var annuity = function (params) {

  var K = params.ammount || 100000;
  var i = params.interest || 0.05;
  var n = params.perAnno || 12;
  var T = params.years || 10;
  var q = 1 + i / n;
  var qnt = Math.pow(q, n * T);

  var self = {
    annuity: function () {
      var A = K * qnt * (q - 1) / (qnt - 1);
      return A;
    },
    rate: function (params) {

    },
    time: function (params) {
      var time = Math.log(1 + i / T) / Math.log(1 + i / n);
      return tine;
    },
    completeInterest: function () {
      var Z = K * (qnt * ((q - 1) * n * T - 1) + 1) / (qnt - 1);
      return Z;
    },
    tickInterest: function (params) {
      if (!params || !params.debt || !params.step) {
        return false;
      }
      var Tk = params.T || T;
      Zk = K * i * (Math.pow(q, Tk) - Math.pow(q, params.step - 1)) / (Math.pow(q, Tk) - 1);
      return Zk;
    },
    restDebt: function (params) {
      if (!params || !params.annuity || !params.step) {
        return false;
      }
      var ann = params.annuity;
      var k = params.step;
      var R = K * Math.pow(q, k) - ann * (Math.pow(q, k) - 1) / (q - 1);
      return R;
    },
    interest: function (params) {
      if (!params || !params.debt) {
        return false;
      }
      return params.debt * i / n;
    },
    changeParams: function (params) {
      K = params.ammount || K;
      i = params.interest || i;
      n = params.perAnno || n;
      T = params.years || T;
      q = 1 + i / n;
      qnT = Math.pow(q, n * T);
    }

  };

  return self;

}

module.exports = annuity;
