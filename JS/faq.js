document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const arrow = question.querySelector(".arrow");

            // Toggle visibility of the answer
            if (answer.classList.contains("visible")) {
                answer.classList.remove("visible");
                arrow.style.transform = "rotate(0deg)"; // Reset arrow
            } else {
                answer.classList.add("visible");
                arrow.style.transform = "rotate(180deg)"; // Rotate arrow
            }
        });
    });
});
