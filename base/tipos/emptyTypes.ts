const error = (message: string): never => {
  throw new Error(message);
};

error('Auxilio');

const otherFunction = (message: string) => {
  console.log(message);
};

const call = (message: string): void => {
  otherFunction(message);
};

call('Prueba');
