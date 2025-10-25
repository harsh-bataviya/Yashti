// Existing countdown code remains...
const targetDate = new Date('2025-10-26T10:00:00').getTime(); // Set to midnight on Oct 26, 2025; adjust time if needed

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    } else {
        document.getElementById('countdown').innerHTML = '<p>The big day is here!</p>';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
// Flower shower function
function createFlowerShower() {
    const shower = document.getElementById('flower-shower');
    const flowers = ['🌸', '🌼', '🌺', '🌻', '💐']; // Flower emojis
    const numFlowers = 20; // Number of falling flowers

    for (let i = 0; i < numFlowers; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * 100 + '%'; // Random horizontal position
        flower.style.animationDuration = (Math.random() * 5 + 5) + 's'; // Random fall speed (5-10s)
        flower.style.animationDelay = Math.random() * 5 + 's'; // Stagger start
        shower.appendChild(flower);

        // Remove flower after animation to avoid buildup
        setTimeout(() => {
            flower.remove();
        }, 10000); // Matches max animation duration
    }
}

// Trigger on page load
window.addEventListener('load', createFlowerShower);
