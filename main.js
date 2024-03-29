/* IQ TEST */
'use strict';

// use .toLowerCase() so answers are not case-sensitive

// Event Listener
document.getElementById('mark-quiz').addEventListener('click', main);

// GLOBAL VARS
let score = 0;

// Function
function main() {
    // Explain Answers button
    // Event Listener only after taking first try
    // Shows button
    document.getElementById('explain').classList.remove('hide');
    document.getElementById('explain').addEventListener('click', explainAns);

    // GET INPUT
    let q1 = document.getElementById("q1");
    let q1Ans = q1.value;

    let q2 = document.getElementById('q2');
    let q2Ans = Number(q2.value);

    let q3 = document.getElementById('q3');
    let q3Ans = Number(q3.value);

    let q4 = document.getElementById('q4');
    let q4Ans = q4.value;

    // Q1 (which way is she turning?)
    if (q1Ans.toLowerCase() == 'both') {
        q1.classList.remove('wrong');
        q1.classList.add('correct');
        score++

    } else {
        q1.classList.remove('correct');
        q1.classList.add('wrong');

    }


    // Q2 (what number do you see?)
    if (q2Ans == 17) {
        q2.classList.remove('wrong');
        q2.classList.add('correct');
        score++

    } else {
        q2.classList.remove('correct');
        q2.classList.add('wrong');
    }


    // Q3 (how many numbers can you see in the pic?)
    if (q3Ans == 10) {
        q3.classList.remove('wrong');
        q3.classList.add('correct');
        score++

    } else {
        q3.classList.remove('correct');
        q3.classList.add('wrong');
    }


    // Q4 (what do ghosts avoid?)
    if (q4Ans.toLowerCase() == 'the living room' || q4Ans.toLowerCase() == 'living room') {
        q4.classList.remove('wrong');
        q4.classList.add('correct');
        score++

    } else {
        q4.classList.remove('correct');
        q4.classList.add('wrong');
    }

    // PROCESS - Calculate Score
    Math.floor(score = score / 4 * 100);
    // OUTPUT - display output
    let comment = document.getElementById('comment');
    document.getElementById('result').innerHTML = score + '%';
    if (score == 0) {
        comment.innerHTML = 'Did you study?? :(';
        comment.style.fontWeight = 'bold';
    } else if (score == 25) {
        comment.innerHTML = 'You might wanna study... :/';
    } else if (score == 75) {
        comment.innerHTML = 'Yay! You passed!! :)';
    } else if (score == 100) {
        comment.innerHTML = 'Welcome to the club, Einstein! :D';
        comment.style.color = '#666B4E';

    }

    // reset counter
    score = 0;
}

// EXPLAIN ANSWERS
function explainAns() {
    // Explain Answer
    document.getElementById('q1-why').classList.toggle('hide');
    document.getElementById('q2-why').classList.toggle('hide');
    document.getElementById('q3-why').classList.toggle('hide');
    document.getElementById('q4-why').classList.toggle('hide');

}