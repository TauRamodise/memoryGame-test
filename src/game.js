module.exports = class Game {
   constructor() {}

   shuffleCards() {
      let array = [...arguments];
      array.forEach(shuffle => {
         shuffle = Math.floor(Math.random() * array.length)
      });

      return array
   }
}

 let backCard;
 let frontCard;
 let cardHasFlipped = false;

// function showCard() {
//    if (!cardHasFlipped) {
//       cardHasFlipped = true;
//       backCard = this;
//    } else {
//       cardHasFlipped = false;
//       frontCard = this;
//    }

//    if (backCard === frontCard) {
//       return true;
//    } else {
//       return false;
//    }
// }







