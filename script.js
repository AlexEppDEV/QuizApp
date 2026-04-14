
// variable
let startCategory = 0;
let startQuestion = 0;
let keysQuestion = 0;


function init() {
    loadQuest();
};

function loadQuest() {
    let answersQuest = " ";
    // console.log(questions.length);
    
    if (startQuestion >= keysQuestion.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none;';

        // console.log('ende')
        startQuestion = 0;
        init(); 
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
        document.getElementById('quest-number').innerText = questNumber;
    }
    
};
function category(selector) {
    let exportNumber = selector.slice(-1);
    // inhalt aus objekt raus gelesen
    let keys = Object.keys(questions);
    let keysCategory = keys[exportNumber];
    keysQuestion = questions[keysCategory];
    loadQuest();
};


function answers(selector) {
    let rightAnswersQuestion = keysQuestion[startQuestion].correctAnswer;
    let exportNumber = selector.slice(-1);

    if ( exportNumber == keysQuestion[startQuestion].correctAnswer) {   
        document.getElementById('answers_' + exportNumber).classList.add('bg-success');  
    }
    else {
        document.getElementById('answers_' + exportNumber).classList.add('bg-danger');
        document.getElementById('answers_' +rightAnswersQuestion).classList.add('bg-success');
    }
    document.getElementById('next-answers').disabled = false;
};



function nextQuestion() {
    startQuestion++;
    loadQuest();
    removeButton();
};


function removeButton() { 
    document.getElementById('next-answers').disabled = true;
    for (let index = 0; index < keysQuestion[startQuestion].answers.length; index++) {
        answersQuest = keysQuestion[startQuestion].answers[index];
        document.getElementById('answers_' + index).classList.remove('bg-success');
        document.getElementById('answers_' + index).classList.remove('bg-danger');
    };

};