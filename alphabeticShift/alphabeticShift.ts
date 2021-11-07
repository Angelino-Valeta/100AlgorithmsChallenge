function alphabeticShift(inputString: string): string{
  let alphabet = ('abcdefghijklmnopqrstuvxyz').split('');

  const string = inputString.split('').map((char) => {
    const i = alphabet.indexOf(char);
    return alphabet[i + 1] != undefined ? alphabet[i+1]: 'a';
  }).join('');

  return string;
}

const inputString = 'Angelino Valeta';
console.log(alphabeticShift(inputString));