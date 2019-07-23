

var numOfWins = 0;
var numOfLoses = 0;
var gameOver = 0;
var guesses_remaining = 20;
var letters_already_guessed = [];
var utah_Birds = ["hawk", "condor", "eagle", "osprey", "seagull", "hummingbird", "crane", "bluebird", "quail", "oriole", "magpie", "flycatcher", "sparrow"]
var selected_word;
var dashes = [];
var selected_word_array = [];



// picks a random word from utah_Birds array
function pickRandomBirdWord() {
    // the number of words in the utah_Birds array
    var totalWords = utah_Birds.length;

    // randomNumber generator between the number of words in array
    var randomNumber = Math.floor(Math.random() * totalWords);
    selected_word = utah_Birds[randomNumber];
    console.log(selected_word);

    // count of how many letters in the chosen random word
    count_of_letters = selected_word.length;
    console.log(count_of_letters);

    // initialize temporary variable for dashes
    dashes = new Array(count_of_letters);

    // add dashes to the random word element to equal the number of letters in the selected word
    selected_word_array = [];
    for (var i = 0; i < count_of_letters; i++) {
        dashes[i] = "-";
        selected_word_array[i] = selected_word.charAt(i);
    }


    document.getElementById("random_word").innerHTML = dashes.join(" ");

    
    for (var i=0; i<selected_word_array.length;i++){
    console.log(selected_word_array[i]) ;   
    }


}


// update the game logic when player chooses a letter
function updateGameLogic() {
    document.getElementById("wins").innerHTML = numOfWins;
    document.getElementById("loses").innerHTML = numOfLoses;
    document.getElementById("guesses_remaining").innerHTML = guesses_remaining;
    document.getElementById("letters_guessed").innerHTML = letters_already_guessed;
    document.getElementById("random_word").innerHTML = dashes.join("");


}

// javascript logic to capture keystrokes on key up
document.onkeyup = function (event) {
    console.log(event)
    var userKey = event.key

    //player selects correct letter
    if (selected_word.includes(userKey)) {
        console.log("correct guess");

        //pushes key selected by user to display on screen in letters_already_guessed array
        document.getElementById("letters_guessed").innerHTML= userKey;
        letters_already_guessed.push(userKey)


        for (var i = 0; i < count_of_letters; i++) {
            if (selected_word_array[i] == userKey) {
                dashes[i] = selected_word_array[i];
            }
        }

    } //player selects incorrect letter
    else {
        console.log("incorrect guess");

        //pushes key selected by user to display on screen in letters_already_guessed array
        document.getElementById("letters_guessed").innerHTML= userKey;
        letters_already_guessed.push(userKey)
    }

    //update win and loss scores

    guesses_remaining -= 1;
    
    if (guesses_remaining === 0){
        numOfLoses +=1;
        alert("You Lose!");
        resetGame();


    }
    else if (guesses_remaining > 0){
        if(dashes.join('') === selected_word){
            numOfWins +=1;
            alert("You Won!")
            resetGame();
        }
    }

    //update the html interface
    updateGameLogic();

    console.log(dashes);
    console.log(selected_word_array);
}


// start the game
function startGame() {
    alert("press any key to start");
    updateGameLogic();
    pickRandomBirdWord(); 
    
}

// reset the game when player wins/loses
function resetGame() {
    guesses_remaining = 20;
    pickRandomBirdWord();
    empty();
}

function empty(){
    letters_already_guessed.length=0;
}
