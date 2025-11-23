// FAQ Toggle
document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
        item.querySelector("p").classList.toggle("show");
        item.querySelector("p").style.display =
            item.querySelector("p").style.display === "block" ? "none" : "block";
    });
});

// Counter Animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    let target = +counter.getAttribute('data-target');
    let count = 0;
    let increment = target / 200;

    function updateCounter() {
        if (count < target) {
            count += increment;
            counter.innerText = Math.floor(count);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
});
