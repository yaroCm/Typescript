namespace Validations {
  export const validateLength3 = (value: string) =>
    value.length > 3 ? true : false;

  export const chageMoneyNumber = (value: number) => `$${value}`;
}
console.log(Validations.chageMoneyNumber(200));
