AOS.init({
    duration: 1000,
    once: true
});

/* Typing effect */
const text =
"Python Developer | Django Developer | Web Developer";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 60);
    }
}

typing();

/* Theme switch */
const radios = document.querySelectorAll('input[name="theme"]');

radios.forEach(radio => {
    radio.addEventListener("change", function () {
        document.body.className = this.value;
    });
});