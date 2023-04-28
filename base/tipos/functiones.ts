(() => {
  const heroString: string = 'Hero';

  function heroStringhero(): string {
    return heroString;
  }

  const newHeroString = (): string => {
    return heroString;
  };

  const complateName = (firstName: string, lastName: string): string => {
    return firstName + lastName;
  };
  const complateNameOptional = (
    firstName: string,
    lastName: string = ''
  ): string => {
    return firstName + lastName;
  };
  console.log('complateName', complateName('j', 'cruz'));
  console.log('complateNameOptional', complateNameOptional('j'));

  const nameUppercase = (
    firstName: string,
    upperCase: boolean,
    lastName?: string
  ) => {
    const string = `${firstName} ${lastName || ''}`;
    return upperCase ? string.toUpperCase() : string;
  };
  console.log('nameUppercase', nameUppercase('yaro', true));

  const restFunction = (firstName: string, ...restNames: string[]) => {
    return `${firstName} ${restNames.join(' ')}`;
  };

  console.log(
    'restFunction',
    restFunction('Jordi', 'Jaromil', 'Cruz', 'Medrano', 'Yarito')
  );

  const newFunction = complateName;
  console.log(newFunction('yaro', 'cruz'));
})();
