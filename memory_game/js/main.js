console.log("Up and running!");

cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];

const cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

const cardTwo = cards[3];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}
	else{
		alert("Sorry, try again.");
	}
}