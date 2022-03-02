// if (firstCard.score === secondCard.score) {
//   console.log(`let the war commence`);
//   let player1War = player1.splice(1, 4);
//   let player2War = player2.splice(1, 4);
//   let warPile = [firstCard, secondCard];
//   console.log(player1War);
//   console.log(player2War);
//   var valid = true;
//   while (valid) {
//     if (player1.length < 4 || player2.length < 4) {
//       player1.length < 4 ? alert(`player 1 lost`) : console.log(`continue war`);
//       player2.length < 4 ? alert(`player 2 lost`) : console.log(`continue war`);
//       valid = false;
//     } else if (player1War[3].score > player2War[3].score) {
//       // warPile.push(player1War, player2War);
//       let warPile = [...player1War, ...player2War, firstCard, secondCard];
//       console.log(warPile);
//       player1.push.apply(player1, warPile);
//       console.log(player1.length);
//       console.log(player2.length);
//       valid = false;
//     } else if (player1War[3].score < player2War[3].score) {
//       let warPile = [...player1War, ...player2War, firstCard, secondCard];
//       console.log(warPile);
//       player2.push.apply(player2, warPile);
//       console.log(player1.length);
//       console.log(player2.length);
//       valid = false;
//     } else if (player1War[3].score == player2War[3].score) {
//       sadfasf;
//     }
//   }
// }
function getCard() {
  let element = document.createElement("div");
  let element2 = document.getElementById("cardRen");
  element2.setAttribute("src", "2_of_clubs.png");
}
