// quizGame.js
// This module defines a simple quiz game where a question is selected randomly,
// the computer makes a random choice from the possible answers, and the result
// is determined based on whether the computer's choice matches the correct answer.


const questions = [
  {
    category: "JavaScript",
    question: "Which keyword declares a block scoped variable?",
    choices: ["var", "let", "function"],
    answer: "let",
  },
  {
    category: "JavaScript",
    question: "What does Array.push do?",
    choices: ["Adds to the end", "Removes from the end", "Sorts the array"],
    answer: "Adds to the end",
  },
  {
    category: "Web",
    question: "What does HTML stand for?",
    choices: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperTool Multi Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    category: "Math",
    question: "What is 12 * 3?",
    choices: ["36", "24", "48"],
    answer: "36",
  },
  {
    category: "General",
    question: "Which one is a primary color?",
    choices: ["Green", "Purple", "Red"],
    answer: "Red",
  },
];

function getRandomQuestion(questionsArray) {
  const index = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[index];
}

function getRandomComputerChoice(choicesArray) {
  const index = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[index];
}

function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  }
  return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
}