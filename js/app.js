'use strict';
/*
 * Create a list that holds all of your cards
 */

var cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
//array to store inner html of  cards.
var open = [];
//array  to store cards.
var card = [];
//moves variable to store moves count.
var moves = 0;
// totalcount variable to check all card pairs matched or not.
var totalcount = 0;
// array to hold stars.
var stars = Array.prototype.slice.call(document.querySelectorAll(".fa-star"));
// starcount variable to store count of stars remaining.
var starcount = 3;

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
  var currentIndex = array.length,
    temporaryValue, randomIndex;

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

let timerStart = false;
//adding Event listener for the cards.
cards.map(x => {
  x.addEventListener("click", displayCards);
});

//displayCards function to display the cards when clicked.
function displayCards() {
  if (timerStart == false) {
    timerStart = true;
    //calling timer function.
    timer();
  }
  // check the card such that it do not contain class name "open".
  if (!this.classList.contains("open") && open.length < 2) {
    this.classList.add("open", "show", "disabled");
    open.push(this.innerHTML);
    card.push(this);
    moves++;
    movecounter();
    if (open.length == 2) {
      setTimeout(function() {
        matched(this);
      }, 350);
    }
  }
}

//timer function to display timer on the screen.
var time = document.getElementById('time');
var hours = 0,
  mins = 0,
  secs = 0;
var interval;

function timer() {
  interval = setInterval(function() {
    secs++;
    if (secs == 60) {
      mins++;
      secs = 0;
    }
    if (mins == 60) {
      hours++;
      mins = 0;
    }
    time.innerHTML = mins + " m : " + secs + " s";

  }, 1000);
}

// matched function to check whether cards are matched or not
function matched(x) {
  //if cards are not matched remove class "open" and "show" from both cards.
  if (!(open[0] == open[1])) {
    card.map(x => {
      x.classList.remove("open", "show", "disabled")
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
      clearInterval(interval);
      counter = document.querySelector('#time');
      swal({
          title: "Congratulations",
          html: "You have won the game! <br> MOVES: &nbsp" + moves + "<br> STARS: &nbsp" + starcount + '<i class="fa fa-star"></i>' + "<br> Time: &nbsp" + time.innerHTML,
          confirmButtonText: "Play Again"
        },

      ).then(function() {
        //this function reloads the page when you click "Play Again" button in the sweet alert
        location.reload();
      });
    }
  }
}

// move counter functions to decrease stars on increase in the moves
function movecounter() {
  var move = document.querySelector('.moves')
  move.innerHTML = moves;
  //if moves greater than 20 we remove a star
  if (moves > 23 && starcount == 3) {
    stars[starcount - 1].classList.add("fa-star-o");
    starcount--;
  }
  //if moves greater than 35 we remove another star
  if (moves > 40 && starcount == 2) {
    stars[starcount - 1].classList.add("fa-star-o");
    starcount--;
  }
}

// adding functionality to repeat button
var repeat = document.querySelector('.fa-repeat');
repeat.addEventListener("click", function() {
  window.location.reload();
});
