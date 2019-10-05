let word = "";
let wordGuess = [];
let wrongGuess = [];
let guessBomb = 0; /* Counter for Guesses  */
let winCount = 1;
let guess = "";
let dif = 0;


/* Press Any Key to Start  */

window.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    document.addEventListener("keypress", start);
});

/* Word for Guesses  */
function wordw() {
    let randomWords = ["humor", "miniature", "amusing", "creepy", "fact", "risk", "verse", "land", "lumpy", "holiday", "glorious", "weigh", "brake", "pretty", "grin", "capricious", "bite-sized", "misty", "ignore", "certain", "sloppy", "dress", "true", "zonked", "observation", "action", "various", "want", "direful", "suck", "dress", "scarecrow", "judge", "madly", "quizzical", "consist", "fierce", "love", "arrest", "serve", "fit", "hug", "tan", "curve", "eatable", "tub", "race", "innocent", "open", "preach", "steady", "acoustics", "lock", "field", "arrange", "rifle", "learned", "toe", "flow", "competition", "ill-fated", "oatmeal", "match", "male", "measure", "loaf", "smile", "wrestle", "dull", "food", "locket", "bell", "beg", "strengthen", "responsible", "enchanting", "loutish", "switch", "idea", "nine", "squeamish", "pig", "bat", "dear", "trains", "owe", "frogs", "assorted", "lonely", "hurry", "natural", "sun", "snow", "obnoxious", "broken", "friend", "bright", "cake", "sour", "permit", "economic", "lovely", "quick", "van", "tempt", "apparel", "decay", "business", "adjustment", "blushing", "makeshift", "slippery", "load", "winter", "exist", "tongue", "country", "roll", "fast", "moor", "possess", "pat", "pass", "books", "impartial", "hospitable", "dust", "naughty", "extra-large", "tacky", "produce", "committee", "fuzzy", "judicious", "nebulous", "stick", "ear", "copy", "friendly", "press", "distinct", "vegetable", "upset", "venomous", "statement", "sulky", "spell", "x-ray", "square", "taste", "great", "thumb", "adjoining", "chilly", "test", "ancient", "green", "badge", "work", "repeat", "free", "elderly", "doctor", "difficult", "grubby", "approval", "turn", "vivacious", "thundering", "cherries", "rest", "plan", "crime", "sticks", "wealthy", "phone", "suspend", "gullible", "fence", "note", "wall", "interest", "coil", "jump", "enchanted", "funny", "racial", "greasy", "polish", "elbow", "smart", "bore", "crowd", "glistening", "oval", "eggs", "nauseating", "detailed", "veil", "coal"]
    let raNum = Math.floor(Math.random() * randomWords.length);
    return randomWords[raNum];
}

/* loading the word base  */

function wordStart() {
    let wordLength = word.length;
    let count = wordLength;
    let bar23 = " ____ ";
    while (count > 0) {
        wordGuess.push(bar23);
        count -= 1;
    }

}

/* Counter for Win Letters  */

function winCountFunc() {
    let num = 0;
    let lettUsed = "";
    let count = word.length;

    while (count > 0) {
        if (lettUsed.includes(word[count - 1])) {

        } else {
            num += 1;
            lettUsed += word[count - 1];
        }

        count -= 1;
    }

    return num;
}

/* Start Main Function  */

function start() {
    document.removeEventListener("keypress", start);
    guessBomb = 8;
    word = wordw().toUpperCase();
    winCount = winCountFunc();

    console.log(word);
    document.getElementById("mainGame").style.display = "block";
    document.getElementById("startGame").style.display = "none";
    document.getElementById("question").innerHTML = "Enter your guess";

    wordStart();


    document.getElementById("RRguess").style.display = "block";
    document.getElementById("rightGuess").innerHTML = wordGuess;
    document.getElementById("wrongGuess").innerHTML = "Wrong guesses: " + wrongGuess;
    document.getElementById("guessesLeft").innerHTML = "Guesses remaining: " + guessBomb;

}
/* listening keyboard event  */

document.onkeyup = function (event) {
    let lett = event.key.toUpperCase();

    let rightOnot = isRightOnot(lett);
    if (rightOnot) {

        newCW(lett);
        
    } else {
        if (!wrongGuess.includes(lett)) {
            wrongGuess.push(lett.toUpperCase());
            guessBomb -= 1;
        }

    }


    if (guessBomb <= 0) {
        gameLose()
    }

    if (winCount <= 0) {
        gameWin()
    }
    document.getElementById("rightGuess").innerHTML = wordGuess;
    document.getElementById("wrongGuess").innerHTML = "Wrong guesses: " + wrongGuess;
    document.getElementById("guessesLeft").innerHTML = "Guesses remaining: " + guessBomb;
}

/* Testing if theres any letter in the array with word selected  - return boolean */

function isRightOnot(a) {
    let n = word.includes(a);
    return n;
}

/* Function for win count */

function newCW(letter) {
    let count = 0;
    winCount -= 1

    while (count <= word.length - 1) {
        if (letter === word[count]) {
            if (wordGuess[count] === letter) {} else {}

            wordGuess[count] = letter.toUpperCase();
            count += 1;
        } else {
            count += 1;
        }

    }

}

/* Function for game lose  - returns the correct word */
function gameLose() {
    document.getElementById("mainGame").style.display = "none";
    document.getElementById("RRguess").style.display = "none";
    document.getElementById("youLose").style.display = "block";
    document.getElementById("correctWordWas").innerHTML = "The correct word was " + word.toUpperCase();
}

/* Function for game win  - returns the correct word */
function gameWin() {
    document.getElementById("mainGame").style.display = "none";
    document.getElementById("RRguess").style.display = "none";
    document.getElementById("youWin").style.display = "block";
    document.getElementById("correctWordIs").innerHTML = "The correct word Is " + word.toUpperCase();
}

/*  Reset Function for restart the game  */
function restart() {
    document.getElementById("mainGame").style.display = "none";
    document.getElementById("RRguess").style.display = "none";
    document.getElementById("youLose").style.display = "none";
    document.getElementById("youWin").style.display = "none";


    word = "";
    wordGuess = [];
    wrongGuess = [];
    guessBomb = 8;
    winCount = 1;
    guess = "";
    dif = 0;
    start()
}