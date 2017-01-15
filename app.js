/*--- Defining global variables ---*/

//questions, andswers, correct response, info regarding the correct response

var questionsArray = [
    //Question 1
    {
        questionText: 'What is the largest wine market in the world?',
        questionChoices: ['France', 'USA', 'Italy'],
        questionCorrectChoice: 1,
        correctDetails: 'The U.S. has been the world’s largest wine market since 2010. '
    },

    //Question 2
    {
        questionText: 'What white grape variety produces aromas commonly described as grassy, grapefruit, and lychee?',
        questionChoices: ['Sauvignon Blanc', 'Chardonnay', 'Muscat'],
        questionCorrectChoice: 0,
        correctDetails: 'Sauvignon blanc is commonly described with terms like grassy, grapefruit, and lychee.'
    },

    //Question 3
    {
        questionText: 'The HUnter Valley is in which Australian state?',
        questionChoices: ['Queensland', 'New South Wales', 'Victoria'],
        questionCorrectChoice: 1,
        correctDetails: 'The Hunter Valley is in New South Wales, and is one of the major wine regions of Australia.'
    },

    //Question 4
    {
        questionText: 'What two grape varietals were bred together to yeild Cabernet Sauvignon?',
        questionChoices: ['Cabernet Franc, Merlot', 'Malbec, Chardonnay', 'Cabernet franc, Sauvignon blanc'],
        questionCorrectChoice: 2,
        correctDetails: 'Cabernet Sauvignon is the progeny of two other Bordeaux cultivars, Cabernet franc and Sauvignon blanc.'
    },

    //Question 5
    {
        questionText: 'How many red grape varietals are in the Bordeaux family?',
        questionChoices: ['7', '6', '5'],
        questionCorrectChoice: 2,
        correctDetails: 'There are 5 red Bordeaux varietals - Cabernet sauvignon, Cabernet franc, Merlot, Malbec, Petit verdot.'
    },

    //Question 6
    {
        questionText: 'The Mosel wine region is in which country?',
        questionChoices: ['Germany', 'USA', 'Austria'],
        questionCorrectChoice: 0,
        correctDetails: 'The Mosel wine region is in Germany.'
    },

    //Question 7
    {
        questionText: 'What puts the sparkle into sparkling wine?',
        questionChoices: ['carbon monoxide', 'carbon dioxide', 'calcium carbonate'],
        questionCorrectChoice: 1,
        correctDetails: 'Carbon dioxide gives sparkling wine the sparkle - or bubbles.'
    },

    //Question 8
    {
        questionText: 'Where is the wine region Mendoza?',
        questionChoices: ['California', 'Argentina', 'Chile'],
        questionCorrectChoice: 1,
        correctDetails: 'Mendoza is a wine region in Argentina.'
    },

    //Question 9
    {
        questionText: 'What two wine families formed a joint partnership to start Opus One?',
        questionChoices: ['Antinori, Gallo', 'Krug, Gaja', 'Mondavi, Rothschild'],
        questionCorrectChoice: 2,
        correctDetails: 'The winery was founded as a joint venture between Baron Philippe de Rothschild of Château Mouton Rothschild and Robert Mondavi to create a single Bordeaux style blend based upon Napa Valley Cabernet Sauvignon.'
    },

    //Question 10
    {
        questionText: 'What is Cava?',
        questionChoices: ['Spanish term for a wine cave', 'Sparkling wine from Spain', 'A word that means a blend of different grapes'],
        questionCorrectChoice: 1,
        correctDetails: 'Cava is Spanish sparkling wine.'
    }
];

//define the starting point

var currentQuestionNumber = 0;
var totalNumberOfQuestions = questionsArray.length;
var totalNumberOfCorrectAnswers = 0;


// code that defines functions and objects
//function to start quiz
function startQuiz() {
    alert("startQuiz() function activated")


}
//function to load questions 1 at a time
function askQuestion(questionText, questionChoices, questionCorrectChoice, correctDetails) {
    this.questionText = questionText;
    this.questionChoices = questionChoices;
    this.questionCorrectChoice = questionCorrectChoice;
    this.correctDetails = correctDetails;
    alert("askQuestion() function activated")
}

//function to verify answer
function verifyResponse() {
    return questionChoice === this.questionCorrectChoice
    alert("verifyResponse() function activated")
}
//function to show which question you are on
function showQuestionCount() {
    alert("showScore() function activated")
}
//function to show how many questions you have gotten correct
function showScore() {
    alert("showScore() function activated")
}




//code that uses the functions
$(document).ready(function () {
    //   hide quiz and result section on load
    $(showQuestionCount).hide();
    $(showScore).hide();

    //starting the quiz
    //make sure the results container is empty



    //on click on "#startQuiz-button" load first question and hide the #startQuiz-button.




});

//show quiz questions, current question number, and result section
//get user answer
//get the correct answer from the questionsArray
//compare user answer with questionsArray
//    if correct +1 to total number of correct answers
//    console.log total number of correct answers


//if quiz is finished show the results page, if not contunue to next question

//on results page give option to start again
