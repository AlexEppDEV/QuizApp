
// variable
let startQuestion = 0;


function init() {
    loadQuest();
};

function loadQuest() {
    let answersQuest = " ";
    
    if (startQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none;';

        // console.log('ende')
        // startQuestion = 0;
        // init(); 
    }
    else {
        let answersQuestion = questions[startQuestion].question;
        let questNumber = startQuestion + 1;
        for (let index = 0; index < questions[startQuestion].answers.length; index++) {
        answersQuest = questions[startQuestion].answers[index];
        document.getElementById('answers'+'_'+ index).innerText = answersQuest;
    };
        document.getElementById('answersQuestionID').innerText = answersQuestion;
        document.getElementById('quest-max-number').innerText = questions.length;
        document.getElementById('quest-number').innerText = questNumber;
    }
    
};

function answers(selector) {
    let rightAnswersQuestion = questions[startQuestion].correctAnswer;
    let exportNumber = selector.slice(-1);

    if ( exportNumber == questions[startQuestion].correctAnswer) {   
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

    for (let index = 0; index < questions[startQuestion].answers.length; index++) {
        answersQuest = questions[startQuestion].answers[index];
        document.getElementById('answers_' + index).classList.remove('bg-success');
        document.getElementById('answers_' + index).classList.remove('bg-danger');
    };

};