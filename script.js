document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start-quiz');
    const quizForm = document.getElementById('quiz-form');
    
    if (startBtn && quizForm) {
        startBtn.addEventListener('click', function() {
            this.classList.add('hidden');
            quizForm.classList.remove('hidden');
            window.scrollTo(0, 0);
        });
    }
});
