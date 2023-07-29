export const getRandomNumber = (min, max, notEqualTo) => {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    } while (randomNumber === notEqualTo);
    
    return randomNumber;
  };