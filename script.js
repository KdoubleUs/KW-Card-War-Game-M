class Card {
  constructor(suits, ranks, score) {
    this.suits = suits;
    this.ranks = ranks;
    this.score = score;
  }
}

class Deck {
  constructor() {
    this.cards = [];
  }
  setOfCards() {
    let setOfCard = this.cards;
    let suits = ["diamond", "clubs", "heart", "spade"];
    let ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
    let score = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        setOfCard.push(new Card(suits[i], ranks[j], score[j]));
      }
    }
  }
  shuffleDeck() {
    let location1, location2, tmp;
    for (let i = 0; i < 1000; i++) {
      location1 = Math.floor(Math.random() * this.cards.length);
      location2 = Math.floor(Math.random() * this.cards.length);
      tmp = this.cards[location1];
      this.cards[location1] = this.cards[location2];
      this.cards[location2] = tmp;
    }
  }
}
// function playingDeck() {
//   var pokerDeck = new Deck();
//   pokerDeck.setOfCards();
//   pokerDeck.shuffleDeck();
//   return pokerDeck;
// }
// function passOut() {
//   var poker = new Deck();
//   poker.setOfCards();
//   poker.shuffleDeck();
//   console.log(poker);
//   const pokerDeck = [];
//   pokerDeck.push(...poker.cards);
//   // pokerDeck.push(poker);
//   console.log(pokerDeck);
//   return pokerDeck;
// }
// passOut();

// function checkWin() {
var poker = new Deck();
poker.setOfCards();
poker.shuffleDeck();
console.log(poker);
const pokerDeck = [];
pokerDeck.push(...poker.cards);
// console.log(pokerDeck);

var player1 = pokerDeck.splice(0, 26);
var player2 = pokerDeck;
console.log(player1);
console.log(player2);

function checkWin() {
  let firstCard = player1.pop();
  let secondCard = player2.pop();
  console.log(firstCard);
  console.log(secondCard);

  if (firstCard.score > secondCard.score) {
    player1.push(firstCard, secondCard);

    console.log(`player 1 wins`);
    console.log(player1.length);
    console.log(player2.length);
    // console.log(pokerDeck.length);
    // return player1;
  } else if (firstCard.score < secondCard.score) {
    player2.push(firstCard, secondCard);

    console.log(`player2 wins`);
    console.log(player1.length);
    console.log(player2.length);
    // console.log(pokerDeck.length);
    // return player2;
  } else if (firstCard.score === secondCard.score) {
    console.log(`let the war commence`);
    let player1War = player1.splice(1, 4);
    let player2War = player2.splice(1, 4);
    // let warPile = [firstCard, secondCard];
    console.log(player1War);
    console.log(player2War);
    var valid = true;
    while (valid) {
      if (player1War[3].score > player2War[3].score) {
        // warPile.push(player1War, player2War);
        let warPile = [...player1War, ...player2War, firstCard, secondCard];
        console.log(warPile);
        player1.push.apply(player1, warPile);
        console.log(player1.length);
        console.log(player2.length);
        valid = false;
      } else if (player1War[3].score < player2War[3].score) {
        let warPile = [...player1War, ...player2War, firstCard, secondCard];
        console.log(warPile);
        player2.push.apply(player2, warPile);
        console.log(player1.length);
        console.log(player2.length);
        valid = false;
      }
    }
  }
  if (player1.length === 0 || player1.length === 1) {
    alert(`player 1 lost`);
  } else if (player2.length === 0 || player2.length === 1) {
    alert(`player 2 lost`);
  }

  scoreBoard.innerHTML = player1.length;
  scoreBoard2.innerHTML = player2.length;
}
document.querySelector(".d1").addEventListener("click", checkWin);
// let scoreBoard = document.getElementById("deck-amount");
// scoreBoard.innerHTML += player1.length;

let scoreBoard = document.getElementById("deck-amount");
scoreBoard.innerHTML = player1.length;

let scoreBoard2 = document.getElementById("deck-amount2");
scoreBoard2.innerHTML = player2.length;
// scoreBoard.innerHTML += player1.length;

//problems with code;
/* need to fix the issue where if the card matches during the war and 
the player does not have at least 4 cards he/she 
loses */
