// FAQ Toggle
document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
        let p = item.querySelector("p");
        let icon = item.querySelector("i");

        if (p.style.display === "block") {
            p.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        } else {
            p.style.display = "block";
            icon.style.transform = "rotate(180deg)";
        }
    });
});
