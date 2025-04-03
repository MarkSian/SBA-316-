// DOM Elements
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const playerForm = document.getElementById("player-form");
const categorySelect = document.getElementById("category");
const playerNameInput = document.getElementById("player-name");
const playerInfo = document.getElementById("player-info");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const progressBar = document.getElementById("progress");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const nextButton = document.getElementById("next-button");
const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-button");
const optionTemplate = document.getElementById("option-template");

// Variables
let score = 0;
let playerName = '';
let selectedCategory = '';
let questions = [];
let currentQuestionIndex = 0;
let timeLeft = 60; // 60 seconds for the quiz
let timer; // timer variable without initial value. betweeen questions, we reset the timer

// Question List
const questionBank = {
    pokemonTrivia: [
        {
            question: "Which Pokémon is known as the 'Pikachu Clone' of the Hoenn region?",
            options: ["Plusle", "Pachirisu", "Togedemaru", "Morpeko"],
            answer: 0
        },
        {
            question: "Which Pokémon is the mascot of the Pokémon franchise?",
            options: ["Charizard", "Pikachu", "Eevee", "Jigglypuff"],
            answer: 1
        },
        {
            question: "What is the National Dex number of Bulbasaur?",
            options: ["1", "25", "151", "4"],
            answer: 0
        }
    ],
    pokemonMechanics: [
        {
            question: "Which move can hit a Pokémon using Fly?",
            options: ["Thunder", "Earthquake", "Shadow Ball", "Hyper Beam"],
            answer: 0
        },
        {
            question: "Which of these abilities negates all weather effects?",
            options: ["Cloud Nine", "Overcoat", "Magic Guard", "Ice Body"],
            answer: 0
        },
        {
            question: "Which item is needed to evolve Sneasel into Weavile?",
            options: ["Razor Claw", "Razor Fang", "Dusk Stone", "Ice Stone"],
            answer: 0
        }
    ],
    pokemonHistory: [
        {
            question: "In which year was the first Pokémon game released?",
            options: ["1996", "1998", "2000", "1994"],
            answer: 0
        },
        {
            question: "What was the first Pokémon ever designed?",
            options: ["Pikachu", "Rhydon", "Bulbasaur", "Arceus"],
            answer: 1
        },
        {
            question: "Which region was introduced in Pokémon Black and White?",
            options: ["Sinnoh", "Unova", "Galar", "Alola"],
            answer: 1
        }
    ]
};



// quiz initialization
function quizInit() {


}

// quiz question loading
function loadQuestion() {



}

// check answers
function checkAnswer() {

}
