
document.addEventListener('DOMContentLoaded', () => {

  
    const questions = [
        {
            question: "Яка країна відома своїми тюльпанами та вітряками?",
            answers: ["Бельгія", "Нідерланди", "Данія", "Швейцарія"],
            correct: 1
        },
         {
            question: "Столицею якої країни є Токіо?",
            answers: ["Китай", "Японія", "Південна Корея", "Таїланд"],
            correct: 1
        },
         {
            question: "Яка країна відома пірамідами Гізи?",
            answers: ["Індія", "Мексика", "Єгипет", "Туреччина"],
            correct: 2
        },
         {
            question: "У якій країні знаходиться Ейфелева вежа?",
            answers: ["Італія", "Франція", "Іспанія", "Німеччина"],
            correct: 1
        },
        {
            question: "Яка країна має форму «чобота» на карті?",
            answers: ["Греція", "Португалія", "Італія", "Хорватія"],
            correct: 2
        },
        {
            question: "Яка країна славиться кенгуру?",
            answers: ["Австралія", "Нова Зеландія", "Бразилія", "Аргентина"],
            correct: 0
        },
        {
            question: "Яка країна є батьківщиною піци?",
            answers: ["Франція", "Італія", "США", "Іспанія"],
            correct: 1
        },
        {
            question: "У якій країні знаходиться статуя Свободи?",
            answers: ["Канада", "США", "Велика Британія", "Австралія"],
            correct: 1
        },
        {
            question: "Яка країна має найбільше населення у світі?",
            answers: ["Індія", "Китай", "США", "Індонезія"],
            correct: 0
        },
         {
            question: "Яка країна відома як «Країна висхідного сонця»?",
            answers: ["Китай", "Японія", "Таїланд", "Індія"],
            correct: 1
        },
       
    ];
    
   const questionText = document.querySelector('#question-text');
    const answersContainer = document.querySelector('#answers-container');
    let questionIndex = 0;
    let score = 0;
    const quizScreen = document.querySelector("#quiz-screen")
    const resultScreen = document.querySelector("#result-screen")
    const startScreen = document.querySelector("#start-screen")
    const startBtn = document.querySelector("#start-btn")
    const restartBtn = document.querySelector("#restart-btn")
    const scoreDisplay = document.querySelector("#score-display")
    const resultText = document.querySelector("#result-text")
    let interval
    let timer = 15
    function startGame(){
        startScreen.classList.remove("show");
        startScreen.classList.add("hide");

        resultScreen.classList.remove("show");
        resultScreen.classList.add("hide");

        quizScreen.classList.remove("hide");
        quizScreen.classList.add("show");
        score = 0
        scoreDisplay.textContent = `Бали: 0`;
        questionIndex = 0
        showQuestion(questions[0])
    }
    startBtn.onclick = startGame
    
    function goToStartScreen() {
    resultScreen.classList.remove("show");
    resultScreen.classList.add("hide");

    quizScreen.classList.remove("show");
    quizScreen.classList.add("hide");

    startScreen.classList.remove("hide");
    startScreen.classList.add("show");
}
    restartBtn.onclick = goToStartScreen
    
    function showQuestion(question) {
        answersContainer.innerHTML = '';
        questionText.innerText = question.question;
        for (let i = 0; i < question.answers.length; i++) {
            const button = document.createElement('button');
            button.innerText = question.answers[i];
            button.classList.add('answer-btn');
            // Завдання 5 - Перевірка відповіді
            button.addEventListener('click', () => checkAnswer(button,i));
            answersContainer.appendChild(button);

        }
    }
    showQuestion(questions[questionIndex]);


    function checkAnswer(button,answerIndex) {
        if (answerIndex == questions[questionIndex].correct) {
            score++;
            button.classList.add("correct");
            scoreDisplay.textContent = `Бали:  ${score} `
            

        } else {
            button.classList.add("wrong");

        }
        questionIndex++;
        if (questionIndex < questions.length) {
        showQuestion(questions[questionIndex]);
    } else {
        showResult();
    }
    }
    function nextQuestion(){
        questionIndex++
        if (questionIndex < questions.length){
            showQuestion(questions[questionIndex])
        }
        else {
            showResult()
        }
    }
    function showResult(){
        quizScreen.classList.remove("show");
        quizScreen.classList.add("hide")
        resultScreen.classList.add("show")
        resultText.textContent = `Твій результат: ${score} з ${questions.length}`
        
    }
    
});
