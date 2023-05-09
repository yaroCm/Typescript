(() => {
  interface Hero {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: 'Barry Allen',
    age: 12,
    powers: ['Super velocidad', 'Viajar el tiempo'],
  };

  let superMan: Hero = {
    name: 'Superman',
    age: 30,
    powers: ['Fuerza', 'volar'],

    getName() {
      return this.name;
    },
  };
})();
