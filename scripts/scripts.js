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
    console.log("---Quiz Initialized---");

    // Player Info and Category Selection
    playerName = playerNameInput.value;
    selectedCategory = categorySelect.value;
    console.log(`Player: ${playerName}, Category: ${selectedCategory}`);

    // Display Player info and Category Selection
    playerInfo.textContent = `Player: ${playerName} | Category: ${categorySelect.options[categorySelect.selectedIndex].text}`;
    console.log("Updated player info display");

    // get questions from selected category
    questions = [...questionBank[selectedCategory]];
    console.log(`Loaded ${questions.length} questions:`, questions);

    // initial game state
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60; // timer for the quiz, will timeout after 60 seconds
    console.log(`Initialize game state - Question: ${currentQuestionIndex}, Score: ${score}, Time Left: ${timeLeft}`);

    // UI updates *will need to call updateProgressBar()
    // scoreElement.texContent = `Score: ${score}`;
    // updateProgressBar();
    // console.log("Updated score and progress bar");

    // Screens
    welcomeScreen.classList.remove('active');
    quizScreen.classList.add('active');
    console.log("Switched to quiz screen");

    // Load Question
    loadQuestion();



};


// quiz question loading
function loadQuestion() {
    // timer
    //reset timer
    clearInterval(timer);
    clearInterval(timer);
    timeLeft = 60;
    timerDisplay.textContent = `Time: ${timeLeft}s`;

    // Begin Timer
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeOut();
        }
    }, 1000) // 1 sec interval
    console.log("Timer started");
    // Display Question
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsList.innerHTML = ''; // reset options list


    // Display Options
    currentQuestion.options.forEach((option, index) => {
        const optionElement = optionTemplate.content.cloneNode(true);
        const opttionRadio = optionElement.querySelector('.option-radio');
        const optionLabel = optionElement.querySelector('.option-label');

        // Options
        opttionRadio.id = `option-${index}`;
        opttionRadio.value = index;
        optionLabel.htmlFor = `option-${index}`;
        optionLabel.textContent = option;

        // enable selection
        opttionRadio.addEventListener('change', () => {
            nextButton.disabled = false; // enable next button when an option is clicked and selected
        });
        optionsList.appendChild(optionElement);
    });

    nextButton.disabled = true; // by default, disable the next button

}

// check answers
function checkAnswer() {

}

// handle time out when timer expires
function handleTimeOut() {
}


// next question *advances to the next question or show results
function nextQuestion() {

}

// update progress bar * progress bar width changes based on current questions
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    console.log(`Progress Bar Updated: ${progress}%`);

}

// event listeners
playerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (playerNameInput.value.trim().length < 2) {
        playerNameInput.classList.add('error');
        playerNameInput.setAttribute('placeholder', 'Name must be at least 2 characters');
        return;
    }

    if (!categorySelect.value) {
        categorySelect.classList.add('error');
        return;
    }

    quizInit();
});

playerNameInput.addEventListener('input', () => {
    if (playerNameInput.value.trim().length >= 2) {
        playerNameInput.classList.remove('error');
        playerNameInput.setAttribute('placeholder', 'Enter your name');
    }
});

categorySelect.addEventListener('change', () => {
    categorySelect.classList.remove('error');
});

nextButton.addEventListener('click', () => {
    checkAnswer(); //calls checkAnswer function to check if the answer is correct
    setTimeout(nextQuestion, 1500); //1500ms to show answer before moving to next question
});