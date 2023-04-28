"use strict";
const error = (message) => {
    throw new Error(message);
};
error('Auxilio');
const otherFunction = (message) => {
    console.log(message);
};
const call = (message) => {
    otherFunction(message);
};
call('Prueba');
