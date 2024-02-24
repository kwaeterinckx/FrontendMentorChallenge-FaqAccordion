// FAQ toggle

// Get height and add a small bottom padding of 24px
const getAnswerHeight = faqAnswer => {
    let answerHeight = faqAnswer.offsetHeight + 24;
    return answerHeight;
};



window.addEventListener("load", () => {

    const faqAnswers = document.querySelectorAll('.faq__answer');
    const faqQuestions = document.querySelectorAll('.faq__question');

    // Get height of all answers and set them as a custom attribute (data-height)
    faqAnswers.forEach(faqAnswer => {
        faqAnswer.setAttribute("data-height", `${getAnswerHeight(faqAnswer)}px`);
        faqAnswer.style.height = 0;
    });

    // Add click eventlistener on all questions
    faqQuestions.forEach(faqQuestion => {
        // On click
        faqQuestion.addEventListener('click', () => {
            // Remove toggle class on not clicked questions
            faqQuestions.forEach(faqOpenQuestion => {
                if (faqOpenQuestion !== faqQuestion) {
                    faqOpenQuestion.classList.remove('faq__question--open');
                    faqOpenQuestion.nextElementSibling.classList.remove("faq__answer--open");
                }
                // Set height back to 0
                faqAnswers.forEach(faqOpenAnswer => {
                    faqOpenAnswer.style.height = "0px";
                });
            });

            // Toggle question & answer class
            faqQuestion.classList.toggle("faq__question--open");
            faqQuestion.nextElementSibling.classList.toggle("faq__answer--open");

            // Set height on selected answer
            const faqOpenAnswer = document.querySelector(".faq__answer--open");
            if (faqOpenAnswer) {
                faqOpenAnswer.style.height = faqOpenAnswer.getAttribute("data-height");
            }
        });
    });
});

