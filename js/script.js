"use strict";

/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/

// create quotes array and push 10 empty objects into it
var quotes = []; // I used var here because const or let resulted in an error ("Identifier 'quotes' has already been declared")
quotes.push({}, {}, {}, {}, {}, {}, {}, {}, {}, {});

// make sure each object has the necessary properties
quotes.forEach(item=>{item.quote = "";
                      item.source = "";
                      item.citation = "";
                      item.year = "";});

// fill the properties as instructed. Each object has a quote and source
// only some objects have year or citation
quotes[0].quote = "First, solve the problem. Then, write the code.";
quotes[0].source = "John Johnson";
quotes[0].year = "1991";

quotes[1].quote = "Experience is the name everyone gives to their mistakes.";
quotes[1].source = "Oscar Wilde";
quotes[1].citation = "Autobiogrphy";

quotes[2].quote = "Java is to JavaScript what car is to Carpet.";
quotes[2].source = "Chris Heilmann";
quotes[2].year = "1998";
quotes[2].citation = "Book";

quotes[3].quote = "Code is like humor. When you have to explain it, it's bad.";
quotes[3].source = "Cory House";
quotes[3].year = "2001";
quotes[3].citation = "Online Interview";

quotes[4].quote = "Before software can be reusable it first has to be usable.";
quotes[4].source = "Ralph Johnson";
quotes[4].year = "2003";
quotes[4].citation = "Software Patterns";

quotes[5].quote = "Fix the cause, not the symptom.";
quotes[5].source = "Steve Maguire";
quotes[5].year = "2006";
quotes[5].citation = "Game Engine Architecture";

quotes[6].quote = "Make it work, make it right, make it fast.";
quotes[6].source = "Kent Beck";
quotes[6].citation = "Twitter";

quotes[7].quote = "Programming isn't about what you know; it's about what you can figure out.";
quotes[7].source = "Chris Pine";
quotes[7].year = "2002";
quotes[7].citation = "C++ Basics";

quotes[8].quote = "The only way to learn a new programming language is by writing programs in it.";
quotes[8].source = "Dennis Ritchie";

quotes[9].quote = "The best error message is the one that never shows up.";
quotes[9].source = "Thomas Fuchs";
quotes[9].year = "2010";
quotes[9].citation = "Software Engineering";

var currentIndex = -1;


// use the printQuote function to load the first quote
printQuote();


// FUNCTION DECLARATIONS

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    // generate random number
    // I initialise index to a nonsense number at first
    let index = -1;
    // this loop checks the new index with the previous index and if its the same number, it tries again until it gets a new number
    // this ensures every button click gets a new quote
    do {
        index = Math.floor(Math.random() * quotes.length);
        //console.log(`current: ${currentIndex} \nindex: ${index}`);
    } while (index == currentIndex);
    currentIndex = index;

    // get a quote
    let q = quotes[index];
    return q;
}


/***
 * `printQuote` function
***/
function printQuote() {

    // get a random quote
    let RandomQuote = getRandomQuote();

    // generate the HTML string
    let HTMLstr = `<p class='quote'> ${RandomQuote.quote} </p> <p class='source'> ${RandomQuote.source}`;
    // check if citation and year exists, and add spans for them if they do
    if (RandomQuote.citation !== "") {
        HTMLstr += `<span class='citation'> ${RandomQuote.citation} </span>`;
    }
    if (RandomQuote.year !== "") {
        HTMLstr += `<span class='year'> ${RandomQuote.year} </span>`;
    }
    // close the p tag
    HTMLstr += `</p>`;

    // set inner HTML of quote-box
    document.getElementById('quote-box').innerHTML = HTMLstr;
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
document.getElementById('load-quote').addEventListener("click", printQuote);