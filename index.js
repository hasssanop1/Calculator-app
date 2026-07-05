const display = document.getElementById("display");

// Simple, dependable calculator logic
function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        if (display.value === "") return;
        
        // Evaluate the math expression
        let result = eval(display.value);
        
        // Round long decimals to keep display clean
        if (!Number.isInteger(result)) {
            result = parseFloat(result.toFixed(8));
        }
        
        display.value = result;

        // Trigger visual neon glow animation on display
        display.classList.remove("display-glow");
        void display.offsetWidth; // Trigger DOM reflow to restart animation
        display.classList.add("display-glow");

    } catch (error) {
        display.value = "Error";
    }
}

// Attach interactive ripple effect to all buttons
document.querySelectorAll(".ripple").forEach(button => {
    button.addEventListener("click", function (e) {
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;

        const circle = document.createElement("span");
        circle.classList.add("ripple-effect");
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 600);
    });
});
