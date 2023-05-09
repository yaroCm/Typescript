(() => {
  interface Address {
    id: 123;
    zip: '74122';
    city: 'Puebla';
  }
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getName(): string;
  }

  interface Employe {
    name: string;
    id: number;
    address: Address;
  }

  const client: Client = {
    name: 'Jordi',
    address: {
      id: 123,
      zip: '74122',
      city: 'Puebla',
    },
    getName: () => `Mi nombre es Jordi`,
  };
})();
