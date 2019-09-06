cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
cardsInPlay = [];

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}
	else{
		alert("Sorry, try again.");
	}
}

function flipCard(){
	var cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute("src", cards[cardId].cardImage);
	if (cardsInPlay.length === 2){
		checkForMatch();
	}
}

function createBoard(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
};

createBoard();

function shuffleCards(){
	var m = cards.length, t, i;
	while (m) {
		i = Math.floor(Math.random() * m--);
		t = cards[m];
		cards[m] = cards[i];
		cards[i] = t;
	}
	return cards;
}

shuffleCards();

// How do I re-createBoard, clear the cardsInPlay array, and also removed the played cards?
function resetCards(){
	var button = document.getElementById("reset-button");
	button.addEventListener("click", createBoard);
}

resetCards();


