"use strict";
(() => {
    class Avenger {
        static getCompany() {
            return this.company;
        }
        /*
        OPCION 1
    
        private name: string;
        public team: string;
        public age: number;
    
        constructor(name: string, team: string, age: number) {
          this.name = name;
          this.age = age;
          this.team = team;
        }
        */
        constructor(name, team, age) {
            this.name = name;
            this.team = team;
            this.age = age;
        }
        bio() {
            return `${this.name} ${this.team}`;
        }
    }
    Avenger.company = 'Marvel';
    const ironMan = new Avenger('IronMan', 'Avengers', 42);
    console.log(ironMan.team);
    console.log(Avenger.getCompany());
})();
