# Memory Game Project

## Table of Contents

+   [Instructions](#instructions)
+   [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

________

# Memory Game

 The goal of the project is to design a interactive Memory game. In this game we are matching the cards if all cards are matched we have display a modal saying you have won the game along with moves and time.

## What I have done to complete the project

+   I have downloaded the Zip file of repository which was provided by the udacity to my personal computer.

+   I have thoroughly read and understood the functionality of the code in the `index.html`, `app.css` and `app.js` files given by the udacity.

+   I have added functionalities to the code to make it a interactive game

+   Run the game by just opening the `index.html` file with browser.

## changes in the index.html file

+   I have first removed the class names `open` ,`show` and `match` for the cards which have came along with the code from udacity.

+   created a `<div>` container  with id `"time"` to show the timer.

+   Included the below script tag in the `<head>` to get the sweetalert.
    ```
    <script src="https://unpkg.com/sweetalert2@7.8.2/dist/sweetalert2.all.js"></script>
    ```

## changes in the app.css file

 I have  increased the font size for stars, moves ,repeat button and timer.

+   Added media queries to make the game responsive on all all devices.

## changes made in app.js file

+   I have created an array of cards and stars. I have made use of `shuffle()` function provided by the udacity to shuffle the cards and append on to the deck. which shuffles the cards on every reload.

+   I have added Event listener for all cards and `displaycards()`function to open the cards and show content when clicked.

+   Another function `matched()` is used to check whether the cards are matched or not, if not matched it closes the card else it changes the cards class to match.

+   I have created an array of stars which hold stars and a `movecounter()` function to decrement the stars on increase in the number of moves.

+   The `totalcount` variable is checked  whether all card pairs are matched or not. If all cards are matched it display a sweetalert modal saying  you have won the game and number of moves along with time.

+   I have added functionality to repeat button by adding the event listener to it. when clicked it reloads the page.

+   I have added a `timer()` function to display the game time on the page. whenever all cards are matched timer has to stop.


  Here's the link of the game (https://tejasaiinukurthi.github.io/MemoryGame/)
