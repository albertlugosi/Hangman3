/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var numMaxSteps = 14;
var numWrongGuesses = 0;
var gallowsFileName = 'images/hangman00.png';

var words = Array ();
var geographyWords = ['Canada', 'Isle of Man', 'Northumberland', 'Irish Sea', 'Salt Lake City',
            'Queensland', 'Liverpool Bay', 'Cornwall', 'River Severn', 'Trafalgar Square',
            'West Croydon', 'Wellington', 'Oxford Street', 'Washington', 'The Mall', 
            'River Thames', 'Scotland', 'Cayman Islands', 'Holyrood Palace', 'Manchester', 
            'Heathrow Airport', 'Channel Tunnel', 'Horseguards Parade', 'Tower of London', 'Central Park', 
            'Empire State Building', 'Sydney Harbour', 'Welshpool', 'Llanberis Lake', 'Atlantic Ocean'];

words = geographyWords;
var lettersGuessed = new Array (26);
for (i = 0; i < lettersGuessed.length; i++) {
    lettersGuessed [i] = false;
}

// Randomly pick the word to be guessed
var riddle = words [Math.floor (Math.random () * words.length)];
riddle = riddle.toUpperCase();

// Prepare masked riddle
var maskedRiddle = riddle;
for (i = 65; i < 90; i++) {
    maskedRiddle = maskedRiddle.replace (String.fromCharCode (i), '_', 'g');
}
document.getElementById('revelation').innerHTML = maskedRiddle;

enableEveryPushbutton ();

// Process letter guessed
function letterGuessed (ch) {
    lettersGuessed [ch.charCodeAt (0) - 65] = true;
    
    // Letter guessed is right
    if (riddle.search (ch) !== -1) {
        for (i = 0; i < riddle.length; i++) {
            if (riddle.substr (i, 1) == ch) {
                maskedRiddle = setCharAt (maskedRiddle, i, ch);
            }
        }
        document.getElementById('revelation').innerHTML = maskedRiddle;
    }
    // Letter guessed is wrong
    else {
        numWrongGuesses += 1;
        document.getElementById('message').innerHTML = 'Step ' + numWrongGuesses + ' of ' + numMaxSteps;
        if (numWrongGuesses < 10) {
            gallowsFileName = 'images/hangman0' + numWrongGuesses + '.png';
        }
        else {
            gallowsFileName = 'images/hangman' + numWrongGuesses + '.png';
        }
        document.getElementById('gallows').src = gallowsFileName;
    }
    
    document.getElementById('message').innerHTML = 'Wrong guesses: ' + numWrongGuesses + ' / ' + numMaxSteps;
    
    // Game over with player loses
    if (numWrongGuesses == numMaxSteps) {
        document.getElementById('revelation').innerHTML = riddle;
        disableEveryPushbutton ();
        document.getElementById('message').innerHTML = 'GAME OVER. You have lost!';
    }
    
    // Game over with player wins
    if (maskedRiddle.search ('_') === -1)
    {
        disableEveryPushbutton ();
        document.getElementById('message').innerHTML = 'CONGRATS, you have won!';
    }
};

// Enable pushbutton
function enablePushbutton (pushbutton) {
    document.getElementById(pushbutton).disabled = false;
    document.getElementById('graphics').focus();
}

// Disable pushbutton
function disablePushbutton (pushbutton) {
    pushbutton.disabled = true;
    document.getElementById('graphics').focus();
}

// Disable every pushbutton (when game is over)
function disableEveryPushbutton () {
    var buttons = document.getElementsByClassName('single_letter_button');
    var i = 0;
    var buttonCurrent;
    while (buttonCurrent = buttons [i]) {
        buttonCurrent.disabled = true;
        i++;
    }
}
    
// Enable every pushbutton (when game starts)
function enableEveryPushbutton () {
    var buttons = document.getElementsByClassName('single_letter_button');
    var i = 0;
    var buttonCurrent;
    while (buttonCurrent = buttons [i]) {
        buttonCurrent.disabled = false;
        i++;
    }
}

// Replace character within string
function setCharAt (str, index, chr) {
    if (index > str.length - 1) {
        return str;
    }
    return str.substr (0, index) + chr + str.substr (index + 1);
}

// Process letter A
document.getElementById('letter_a').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('A');
});

// Process letter B
document.getElementById('letter_b').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('B');
});

// Process letter C
document.getElementById('letter_c').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('C');
});

// Process letter D
document.getElementById('letter_d').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('D');
});

// Process letter E
document.getElementById('letter_e').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('E');
});

// Process letter F
document.getElementById('letter_f').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('F');
});

// Process letter G
document.getElementById('letter_g').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('G');
});

// Process letter H
document.getElementById('letter_h').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('H');
});

// Process letter I
document.getElementById('letter_i').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('I');
});

// Process letter J
document.getElementById('letter_j').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('J');
});

// Process letter K
document.getElementById('letter_k').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('K');
});

// Process letter L
document.getElementById('letter_l').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('L');
});

// Process letter M
document.getElementById('letter_m').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('M');
});

// Process letter N
document.getElementById('letter_n').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('N');
});

// Process letter O
document.getElementById('letter_o').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('O');
});

// Process letter P
document.getElementById('letter_p').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('P');
});

// Process letter Q
document.getElementById('letter_q').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('Q');
});

// Process letter R
document.getElementById('letter_r').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('R');
});

// Process letter S
document.getElementById('letter_s').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('S');
});

// Process letter T
document.getElementById('letter_t').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('T');
});

// Process letter U
document.getElementById('letter_u').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('U');
});

// Process letter V
document.getElementById('letter_v').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('V');
});

// Process letter W
document.getElementById('letter_w').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('W');
});

// Process letter X
document.getElementById('letter_x').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('X');
});

// Process letter Y
document.getElementById('letter_y').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('Y');
});

// Process letter Z
document.getElementById('letter_z').addEventListener('click', function () {
    disablePushbutton (this);
    letterGuessed ('Z');
});

// Respond to New game button
document.getElementById('btn_new_game').addEventListener('click', function () {
    location.reload();
});
