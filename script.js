
// variable
let startCategory = 0; // nummer für die categorys
let startQuestion = 0; // nummer für start index von der frage
let rightAnswers = 0;
let currentQuestions = []; // Speichert das aktuelle Fragen-Array 


function init() {
    startPage();
};


function navCategory(selector) {
    let nameCategory = '';
    startCategory = Number(selector.split('-')[1]); // "0" → 0
    startPage(startCategory);
};


// start seite für starten von quiz
function startPage(startCategory) {
    let nameCategory = '';
    document.getElementById('startScreen').style = '';
    document.getElementById('questionBody').style = 'display: none;';
    document.getElementById('endScreen').style = 'display: none;';
    if (!startCategory) {
        startCategory = 0;
        nameCategory = startCategory;
    }
    let loadNameCategory = Object.keys(questions);
    nameCategory = startCategory;
    document.getElementById('titleCategory').innerText = loadNameCategory[nameCategory];
    startCategory = nameCategory;
};


// button für start von der quiz
function startChallenge() {
    let exportNumber = startCategory;
    // inhalt aus objekt raus gelesen
    let keys = Object.keys(questions);
    let keysCategory = keys[exportNumber];
    rightAnswers = 0;
    document.getElementById('quest_number_right').innerText = rightAnswers; // reset von richtigen fragen
    currentQuestions = questions[keysCategory]; // Speichere das Fragen-Array global

    document.getElementById('startScreen').style = 'display: none;';
    document.getElementById('questionBody').style = '';
      if (!startCategory) {
        nameCategory = startCategory;
    }

    loadQuest(currentQuestions); // Übergib currentQuestions
};


// das laden von fragen und anworten 
function loadQuest(keysQuestion) {
    let answersQuest = " ";
    
    if (startQuestion >= keysQuestion.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none;';
        startQuestion = 0;
    }
    else {
        let answersQuestion = keysQuestion[startQuestion].question;
        let questNumber = startQuestion + 1;

        for (let index = 0; index < keysQuestion[startQuestion].answers.length; index++) {
        answersQuest = keysQuestion[startQuestion].answers[index];
        document.getElementById('answers'+'_'+ index).innerText = answersQuest;
        };
        
        document.getElementById('answersQuestionID').innerText = answersQuestion;
        document.getElementById('quest-max-number').innerText = keysQuestion.length;
        document.getElementById('quest_max_number_right').innerText = keysQuestion.length;
        document.getElementById('quest-number').innerText = questNumber;
        let progressValueMax = keysQuestion.length;
        progressBar(progressValueMax, questNumber);
    }
};


// suche von passenden array objekt in category für fragen
function answers(startCategory) {
    let exportNumber = Number(startCategory.split('-')[1]); // "answers-0" → 0
    let rightAnswersQuestion = currentQuestions[startQuestion].correctAnswer;

    if ( exportNumber == currentQuestions[startQuestion].correctAnswer) {   
        document.getElementById('answers_' + exportNumber).classList.add('bg-success');
        rightAnswers++
        document.getElementById('quest_number_right').innerText = rightAnswers;
    }
    else {
        document.getElementById('answers_' + exportNumber).classList.add('bg-danger');
        document.getElementById('answers_' +rightAnswersQuestion).classList.add('bg-success');
    }

    document.getElementById('next-answers').disabled = false;
};


// weiter zu nächste frage gehen
function nextQuestion() {
    startQuestion++;   
    loadQuest(currentQuestions);
    removeButton();
};


// die farb erkenung für richtig und falsch wird zurück gesetzt
function removeButton() { 
    document.getElementById('next-answers').disabled = true;
    for (let index = 0; index < currentQuestions[startQuestion].answers.length; index++) {
        answersQuest = currentQuestions[startQuestion].answers[index];
        document.getElementById('answers_' + index).classList.remove('bg-success');
        document.getElementById('answers_' + index).classList.remove('bg-danger');
    };
};


// die Category wiederholen
function replayCategory() { 
    selector = startCategory;
    startPage(selector);
};


// weiter zu nächste Category gehen
function shareCategory() {
    startCategory++;
    let key = Object.keys(questions);

    if ( startCategory >= key.length ) {
        startCategory = 0;
    }

    document.getElementById('endScreen').style = 'display: none;';
    document.getElementById('questionBody').style = '';
    startPage(startCategory);
};


function progressBar(progressValueMax, questNumber) {
    let progressValueCalc = 100 / progressValueMax;
    progressValueCalc = progressValueCalc * questNumber;
    document.querySelector(".progress-bar").innerText = Math.round(progressValueCalc) + "%";
    document.querySelector(".progress-bar").style.width = `${progressValueCalc}%`;
};