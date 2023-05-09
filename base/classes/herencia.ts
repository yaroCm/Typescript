(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log('Avenger Creado');
    }

    private getFullName() {
      return `${this.name} in real life is ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, isMutant: boolean = true) {
      super(name, realName);
    }
    get getName() {
      return this.name;
    }
    set setName(name: string) {
      this.name = name;
    }
  }

  const Wolverine = new Xmen('Wolverine', 'Logan');
  Wolverine.setName = 'Lobezno';
  console.log(Wolverine.getName);
})();
