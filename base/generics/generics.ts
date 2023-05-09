function genericFunction<T>(argument: T) {
  return argument;
}

console.log(genericFunction(123).toFixed(2));
console.log(genericFunction('JORDI').toLocaleLowerCase());
console.log(genericFunction(new Date()).getDate);
