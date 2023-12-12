const heading = document.querySelector('.heading');
const text = heading.textContent;
const alpha = text.split("");
heading.textContent = "";

for (let i = 0; i < alpha.length; i++) {
    heading.innerHTML += "<span>" + alpha[i] + "</span>";
}

let count = 0;
let timer = setInterval(onArrival, 100);

// Add event listener to the buttons
const toggleBtn = document.getElementById('toggleBtn');
toggleBtn.addEventListener('click', toggleAnimation);

const restartBtn = document.getElementById('restartBtn'); // Add event listener for the restart button
restartBtn.addEventListener('click', restartAnimation);

let isAnimating = true; // Variable to track animation state

function toggleAnimation() {
    console.log('Button clicked');

    isAnimating = !isAnimating;

    if (isAnimating) {
        timer = setInterval(onArrival, 100);
        toggleBtn.textContent = 'Pause Animation';
    } else {
        clearInterval(timer);
        toggleBtn.textContent = 'Resume Animation';
    }
}

function onArrival() {
    const spans = heading.querySelectorAll("span");

    if (count === spans.length) {
        count = 0;
    }

    const span = spans[count];
    span.classList.add("fade");
    count++;
}

function restartAnimation() {
    console.log('Restart Button clicked');

    clearInterval(timer);
    count = 0;
    heading.querySelectorAll("span").forEach(span => span.classList.remove("fade"));
    timer = setInterval(onArrival, 100); // Adjust the interval time to match your initial interval
    toggleBtn.textContent = 'Pause Animation';
}
