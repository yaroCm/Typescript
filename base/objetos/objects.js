"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 12,
        powers: ['Super velocidad', 'Viajar el tiempo'],
    };
    let superMan = {
        name: 'Superman',
        age: 30,
        powers: ['Fuerza', 'volar'],
        getName() {
            return this.name;
        },
    };
})();
