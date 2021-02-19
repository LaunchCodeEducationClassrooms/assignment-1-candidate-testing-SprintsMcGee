const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
let questions = ["Who was the first American woman in space? ", "True or false: 5000 meters = 5 kilometers. ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  let candidateName = input.question("Name: ")
  console.log("Candidate Name: " + candidateName);
  return candidateName;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question);
  
  for (i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);        
  }
  }
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  /*if (candidateAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
    console.log("Correct");
  } else {
    console.log("Incorrect, correct answer is " + correctAnswer);
  }*/
  
  for (j = 0; j < candidateAnswers.length; j++) {
      console.log(`\n${questions[j]}\nCanidate Answers: ${candidateAnswers[j]}\nCorrect Answers: ${correctAnswers[j]}\n`) 
  }

  let grade = 0;

  for (k = 0; k < candidateAnswers.length; k++) {
    if (candidateAnswers[k].toUpperCase() === correctAnswers[k].toUpperCase()) {
      grade = grade + 1;
    } else {
      grade = grade;
    }
  }

  overallGrade = (grade / questions.length) * 100; 
  console.log(`Overall Grade: ${overallGrade}%`);
  
  if (overallGrade <  80) {
    console.log("Test Failed")
  } else {
    console.log("Test Passed");
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};