//(function () {
//    "use strict";
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
var currentQuestionNumber = 0;
var totalNumberOfQuestion = questionsArray.length;
var totalNumberOfCorrectAnswers = 0;

//define functions

function questionDisplay() {
    //alert("function questionDisplay active");
    //    update the question text
    $('#question').text(questionsArray[currentQuestionNumber].questionText);
    //    delete all existing choices
    $('#choices').empty();

    //    get the total number of choices for the current question
    var totalNumberOfChoices = questionsArray[currentQuestionNumber].questionChoices.length;

    //    loop through all the choices and append them to the choices container
    for (var i = 0; i < totalNumberOfChoices; i++) {
        //        loop through the answer choices and append them to the choices container
        var buildEachChoiceHTML = '<input class="answer" type="radio"  name="option" value="' + i + '">' + questionsArray[currentQuestionNumber].questionChoices[i] + " <br/> ";
        //        append that row to the choices container in HTML
        $('#choices').append(buildEachChoiceHTML);
    }

    //    display the number of the current question
    $('#counter').text("Question " + (currentQuestionNumber + 1) + " of " + totalNumberOfQuestion);
    $('#score').text("You have " + (totalNumberOfCorrectAnswers) + " of " + totalNumberOfQuestion + " correct.");

    //    using functions

}


$(document).ready(function () {
    $('#welcome').show();
    $('#quiz').hide();
    $('#results').hide();

    //on start quiz
    $('#startQuizButton').on('click', function () {
        $('#results').hide();
        $('#welcome').hide();
        $('#quiz').show();
        $('.resultsText').empty();
        questionDisplay();

    });

    //    show quiz questions
    $('#quiz').on('click', '.answer', function () {

        //get the answer from the user
        var userAnswer = $('input[class="answer"]:checked').val();
        //
        // get the correct answer from the question array
        var correctAnswer = questionsArray[currentQuestionNumber].questionCorrectChoice;
        console.log("userAnswer = ", userAnswer);
        console.log("correctAnswer = ", correctAnswer);
        if (userAnswer == correctAnswer) {
            totalNumberOfCorrectAnswers++;
            console.log(totalNumberOfCorrectAnswers);
        }

        if ((currentQuestionNumber + 1) == totalNumberOfQuestion) {
            $('#results').show();
            $('#welcome').hide();
            $('#quiz').hide();

            $('.resultsText').text("You have " + (totalNumberOfCorrectAnswers) + " of " + totalNumberOfQuestion + " correct.");

        } else {
            currentQuestionNumber++;
            questionDisplay();
        }
    });

    //        Load the start section from the results page
    $('#results').on('click', '#startOver', function () {
        $('#welcome').show();
        $('#quiz').hide();
        $('#results').hide();

        currentQuestionNumber = 0;
        totalNumberOfCorrectAnswers = 0;

    })

})
