function startQuiz() {
    var selectedQuiz = document.getElementById("quizSelect").value;
    // Redirect to quiz questions page based on selected quiz
    window.location.href = "questions.html?quiz=" + selectedQuiz;
}
