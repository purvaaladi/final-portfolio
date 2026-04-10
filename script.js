// 🌟 SMOOTH SCROLL
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// 🌌 STAR BACKGROUND
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 120; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";

    stars.forEach(star => {
        star.y += star.speed;

        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(drawStars);
}

drawStars();

// 🌠 RESIZE FIX
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ✨ FADE-IN ANIMATION ON SCROLL
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.8;

        if (top < trigger) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});

// INITIAL STYLE
sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "0.6s";
});
