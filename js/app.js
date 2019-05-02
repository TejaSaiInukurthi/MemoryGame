/*
 * Create a list that holds all of your cards
 */

 var cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
 var count = 0;
 //array to store inner html of  cards.
 var open = [];
 //array  to store cards.
 var card = [];
 //moves variable to store moves count.
 var moves = 0;
 // totalcount variable to check all card pairs matched or not.
 var totalcount = 0;

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

var deck = document.querySelector('.deck');
// shuffling the cards and appending to deck
shuffle(cards).map(i => {
  [].forEach.call(cards, function(x) {
    deck.appendChild(x);
  });
});



// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


//adding Event listener for the cards.
cards.map(x => {
  x.addEventListener("click", displayCards);
});

//displayCards function to display the cards when clicked.
function displayCards() {
  // check the card such that it do not contain class name "open".
  if (!this.classList.contains("open") && count < 2) {
    this.classList.add("open", "show", "disabled");
    open.push(this.innerHTML);
    card.push(this);
    count++;
    moves++;
    if (open.length == 2) {
      setTimeout(function() {
        matched(this);
      }, 250);
      count = 0;
    }
  }
}



// matched function to check whether cards are matched or not
function matched(x) {
  //if cards are not matched remove class "open" and "show" from both cards.
  if (!(open[0] == open[1])) {
    card.map(x => {
      x.classList.remove("open", "show")
    });
    open.pop();
    open.pop();
    card.pop();
    card.pop();
    //if cards matched then add class "match" to the both the cards and increment totalcount.
  } else {
    card.map(x => {
      x.classList.add("match")
    });
    ++totalcount;
    open.pop();
    open.pop();
    card.pop();
    card.pop();
    //if totalcount = 8 which means all card pairs are matched display sweetalert you have won
    if (totalcount == 8) {
      alert("you have won the game");
    }
  }
}
