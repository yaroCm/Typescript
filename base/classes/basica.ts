(() => {
  class Avenger {
    static company = 'Marvel';
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
    constructor(
      private name: string,
      public team: string,
      public age: number
    ) {}
    bio() {
      return `${this.name} ${this.team}`;
    }
  }
  const ironMan: Avenger = new Avenger('IronMan', 'Avengers', 42);
  console.log(ironMan.team);
  console.log(Avenger.getCompany());
})();
