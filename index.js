// Code your solutions in this file
function writeCards(names, event) {
    let thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
        debugger;
        thankYouCards[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  }
  return thankYouCards; 
}

const cards = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(cards);
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

// Example usage
countDown(10);