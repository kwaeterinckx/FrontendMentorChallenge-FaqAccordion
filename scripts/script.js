// FAQ toggle

// Get height of answers and put them in a custom attribute "data-height"
const faqAnswers = document.querySelectorAll('.faq__answer');
faqAnswers.forEach(faqAnswer => {
    let faqAnswerHeight = faqAnswer.offsetHeight + 24;
    faqAnswer.setAttribute("data-height", `${faqAnswerHeight}px`);
    faqAnswer.style.height = "0px";
});

// Set click event listener to each quesion
const faqQuestions = document.querySelectorAll('.faq__question');
faqQuestions.forEach(faqQuestion => {
    // On click
    faqQuestion.addEventListener('click', () => {
        // Remove toggle when clicking another link
        faqQuestions.forEach(faqOpenQuestion => {
            if (faqOpenQuestion !== faqQuestion) {
                // Remove classes
                faqOpenQuestion.classList.remove("faq__question--open");
                faqOpenQuestion.nextElementSibling.classList.remove("faq__answer--open");
                // Set height back to 0
                faqAnswers.forEach(faqOpenAnswer => {
                    faqOpenAnswer.style.height = "0px";
                });
            }
        });
        // Toggle clicked question
        faqQuestion.classList.toggle("faq__question--open");
        faqQuestion.nextElementSibling.classList.toggle("faq__answer--open");

        // Set height on open question
        const faqOpenAnswer = document.querySelector('.faq__answer--open');
        if (faqOpenAnswer) {
            faqOpenAnswer.style.height = faqOpenAnswer.getAttribute("data-height");
        }
    });
});
