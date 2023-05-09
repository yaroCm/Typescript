"use strict";
var Validations;
(function (Validations) {
    Validations.validateLength3 = (value) => value.length > 3 ? true : false;
    Validations.chageMoneyNumber = (value) => `$${value}`;
})(Validations || (Validations = {}));
console.log(Validations.chageMoneyNumber(200));
