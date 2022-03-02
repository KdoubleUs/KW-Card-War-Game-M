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
    let suits = ["diamonds", "clubs", "hearts", "spades"];
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

var poker = new Deck();
poker.setOfCards();
poker.shuffleDeck();
console.log(poker);
const pokerDeck = [];
pokerDeck.push(...poker.cards);

var player1 = pokerDeck.splice(0, 26);
var player2 = pokerDeck;
console.log(player1);
console.log(player2);

function checkWin() {
  let firstCard = player1.pop();
  let secondCard = player2.pop();
  console.log(firstCard);
  console.log(secondCard);
  let cardu = firstCard.ranks;
  let cardusuit = firstCard.suits;
  let cardu2 = secondCard.ranks;
  let cardusuit2 = secondCard.suits;

  if (firstCard.score > secondCard.score) {
    player1.push(firstCard, secondCard);

    console.log(cardu);
    console.log(cardusuit);
    console.log(`player 1 wins`);
    console.log(player1.length);
    console.log(player2.length);
    console.log(
      firstCard.score,
      secondCard.score,
      firstCard.suits,
      secondCard.suits,
      firstCard,
      secondCard
    );

    document.getElementById(
      "cardRen"
    ).src = `./poker-cards/${cardu}_of_${cardusuit}.png`;
    document.getElementById(
      "cardRen2"
    ).src = `./poker-cards/${cardu2}_of_${cardusuit2}.png`;
  } else if (firstCard.score < secondCard.score) {
    player2.push(firstCard, secondCard);

    console.log(`player2 wins`);
    console.log(player1.length);
    console.log(player2.length);
    document.getElementById(
      "cardRen"
    ).src = `./poker-cards/${cardu}_of_${cardusuit}.png`;
    document.getElementById(
      "cardRen2"
    ).src = `./poker-cards/${cardu2}_of_${cardusuit2}.png`;
  } else if (firstCard.score === secondCard.score) {
    console.log(`let the war commence`);
    let player1War = player1.splice(1, 4);
    let player2War = player2.splice(1, 4);
    let warPile = [firstCard, secondCard];
    console.log(player1War);
    console.log(player2War);
    let warCardu = player1War[3].ranks;
    let warCarduSuit = player1War[3].suits;
    let warCardu2 = player2War[3].ranks;
    let warCarduSuit2 = player2War[3].suits;
    var valid = true;
    while (valid) {
      if (player1.length < 4 || player2.length < 4) {
        player1.length < 4
          ? alert(`player 1 lost`)
          : console.log(`continue war`);
        player2.length < 4
          ? alert(`player 2 lost`)
          : console.log(`continue war`);
        valid = false;
      } else if (player1War[3].score > player2War[3].score) {
        warPile = [...player1War, ...player2War, firstCard, secondCard];
        console.log(warPile);
        player1.push.apply(player1, warPile);
        console.log(player1.length);
        console.log(player2.length);
        console.log(`player 1 wins`);
        document.getElementById(
          "cardRen"
        ).src = `./poker-cards/${warCardu}_of_${warCarduSuit}.png`;
        document.getElementById(
          "cardRen2"
        ).src = `./poker-cards/${warCardu2}_of_${warCarduSuit2}.png`;
        valid = false;
      } else if (player1War[3].score < player2War[3].score) {
        let warPile = [...player1War, ...player2War, firstCard, secondCard];
        console.log(warPile);
        player2.push.apply(player2, warPile);
        console.log(player1.length);
        console.log(player2.length);
        document.getElementById(
          "cardRen"
        ).src = `./poker-cards/${warCardu}_of_${warCarduSuit}.png`;
        document.getElementById(
          "cardRen2"
        ).src = `./poker-cards/${warCardu2}_of_${warCarduSuit2}.png`;
        valid = false;
      } else if (player1War[3].score == player2War[3].score) {
        console.log(`war again! click draw!`);
        document.getElementById(
          "cardRen"
        ).src = `./poker-cards/${warCardu}_of_${warCarduSuit}.png`;
        document.getElementById(
          "cardRen2"
        ).src = `./poker-cards/${warCardu2}_of_${warCarduSuit2}.png`;
        valid = false;
      }
    }
  } else if (player1.length === 0 || player1.length === 1) {
    alert(`player 1 lost`);
  } else if (player2.length === 0 || player2.length === 1) {
    alert(`player 2 lost`);
  }

  scoreBoard.innerHTML = player1.length;
  scoreBoard2.innerHTML = player2.length;
}

document.querySelector(".d1").addEventListener("click", checkWin);

let scoreBoard = document.getElementById("deck-amount");
scoreBoard.innerHTML = player1.length;

let scoreBoard2 = document.getElementById("deck-amount2");
scoreBoard2.innerHTML = player2.length;
// scoreBoard.innerHTML += player1.length;

//problems with code;
/* need to fix the issue where if the card matches during the war and 
the player does not have at least 4 cards he/she 
loses */

// function getCard() {
//   let element = document.createElement("div");
//   let element2 = document.getElementById("cardRen");
//   element2.setAttribute(
//     "src",
//     `./poker-cards/${firstCard.score}._of_${firstCard.suits}.png`
//   );
// }
