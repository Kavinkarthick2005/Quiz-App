const questions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris"], answer: "Paris" }
];

let index = 0, score = 0;

function nextQuestion() {
    if (index >= questions.length) {
        document.getElementById("score").innerText = `Your score: ${score}`;
        return;
    }
    
    let quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";
    
    let q = document.createElement("h2");
    q.innerText = questions[index].question;
    quizDiv.appendChild(q);

    questions[index].options.forEach(opt => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => {
            if (opt === questions[index].answer) score++;
            index++;
            nextQuestion();
        };
        quizDiv.appendChild(btn);
    });
}

nextQuestion();
