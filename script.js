// Existing countdown code remains...

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
