"use strict";
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Avenger Creado');
        }
        getFullName() {
            return `${this.name} in real life is ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant = true) {
            super(name, realName);
        }
        get getName() {
            return this.name;
        }
        set setName(name) {
            this.name = name;
        }
    }
    const Wolverine = new Xmen('Wolverine', 'Logan');
    Wolverine.setName = 'Lobezno';
    console.log(Wolverine.getName);
})();
