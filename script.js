const questions =[
    {
        question:"Which of the following is not javascript data types?",
        answers:[
            { text:"a) Null type",correct:false},
            { text:"b) Undefined type", correct:false},
            { text:"c) Number type", correct:false},
            { text:"d) All of the mentioned", correct:true},
        ]
    },
    {
        question:" Which of the following methods/operation does javascript use instead of == and !=?",
        answers:[
            { text:"a) JavaScript uses equalto()", correct:false},
            { text:"b) JavaScript uses equals() and notequals() instead", correct:false},
            { text:"c) JavaScript uses bitwise checking", correct:false},
            { text:"d) JavaScript uses === and !== instead", correct:true},
        ]
    },
    {
        
        question:"Which of the following command is used to install create-react-app?",
        answers:[
            { text:"a) npm install -g create-react-app", correct:true},
            { text:"b) npm install create-react-app", correct:false},
            { text:"c) npm install -f create-react-app", correct:false},
            { text:"d) install -g create-react-app", correct:false},
        ]
    },
    {
        
        question:"A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?",
        answers:[
            { text:"a) Constructor", correct:false},
            { text:"b)  Class", correct:true},
            { text:"c) Object ", correct:false},
            { text:"d) DataObject", correct:false},
        ]
    },{
        question:"How many numbers of elements a valid react component can return?",
        answers:[
            {text: "a) 1",correct:true},
            {text: "b) 2",correct:false},
            {text: "c) 4",correct:false},
            {text: "d) 5",correct:false},
        ]
    },
    {
        question:" What is a state in React?",
        answers:[
            {text: "a)  A permanent storage.",correct:false},
            {text: "b) Internal storage of the component.",correct:true},
            {text: "c) External storage of the component.",correct:false},
            {text: "d) None of the above",correct:false},
        ]
    },


];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
/* question endded and score*/
let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.
    question;
    //display the correct answere
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    })
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct== "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disable=true;
    })
    nextButton.style.display="block";
    }
    function showScore(){
        resetState();
        questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML="Play  Again";
        nextButton.style.display="block";
    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
    }
    else{
        showScore();
    }}
nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();