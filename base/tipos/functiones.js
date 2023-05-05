"use strict";
(() => {
    const heroString = 'Hero';
    function heroStringhero() {
        return heroString;
    }
    const newHeroString = () => {
        return heroString;
    };
    const complateName = (firstName, lastName) => {
        return firstName + lastName;
    };
    const complateNameOptional = (firstName, lastName = '') => {
        return firstName + lastName;
    };
    console.log('complateName', complateName('j', 'cruz'));
    console.log('complateNameOptional', complateNameOptional('j'));
    const nameUppercase = (firstName, upperCase, lastName) => {
        const string = `${firstName} ${lastName || ''}`;
        return upperCase ? string.toUpperCase() : string;
    };
    console.log('nameUppercase', nameUppercase('yaro', true));
    const restFunction = (firstName, ...restNames) => {
        return `${firstName} ${restNames.join(' ')}`;
    };
    console.log('restFunction', restFunction('Jordi', 'Jaromil', 'Cruz', 'Medrano', 'Yarito'));
    const newFunction = complateName;
    console.log(newFunction('yaro', 'cruz'));
})();
