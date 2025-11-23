// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;

        answer.style.display =
            answer.style.display === "block" ? "none" : "block";

        btn.querySelector("span").textContent =
            btn.querySelector("span").textContent === "+" ? "-" : "+";
    });
});
