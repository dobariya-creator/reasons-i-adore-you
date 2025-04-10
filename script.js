// Array of sweet and romantic reasons
const reasons = [
    "Your smile brightens my darkest days",
    "The way you laugh makes my heart skip a beat",
    "Your kindness to everyone around you inspires me",
    "You always know exactly what to say when I need to hear it",
    "The cute face you make when you're concentrating",
    "How you make even ordinary moments feel special",
    "Your passion for the things you love",
    "The way you care for others without expecting anything in return",
    "How your eyes light up when you're excited about something",
    "Your courage to try new things even when they scare you",
    "The way you dance when you think no one is watching",
    "How you always remember the little details about me",
    "Your strength during difficult times",
    "The thoughtful surprises you plan",
    "How safe I feel when I'm with you",
    "Your creative mind and unique perspective",
    "The way you stand up for what you believe in",
    "How you encourage me to be my best self",
    "Your incredible ability to make me laugh",
    "The warmth of your hugs that make everything better",
    "The way you look at me like I'm the only person in the room",
    "How you make my heart race with just a simple touch",
    "Your beautiful soul that shines through everything you do",
    "The way you understand me without me having to say a word",
    "How you make every day feel like a new adventure",
    "Your gentle touch that sends shivers down my spine",
    "The way you make me feel like I'm home wherever we are",
    "How you love me unconditionally, flaws and all",
    "Your ability to turn my bad days into good ones",
    "The way you make me believe in love every single day"
];

// Get DOM elements
const heartButton = document.getElementById('heart-btn');
const reasonText = document.getElementById('reason');
const floatingHearts = document.querySelector('.floating-hearts');

// Function to create floating hearts
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    heart.style.animation = `float ${Math.random() * 3 + 2}s linear forwards`;
    floatingHearts.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 300);

// Function to display a random reason
function showRandomReason() {
    // Get random index
    const randomIndex = Math.floor(Math.random() * reasons.length);
    
    // Get random reason from the array
    const randomReason = reasons[randomIndex];
    
    // Display the reason
    reasonText.textContent = randomReason;
    
    // Add animation class
    reasonText.classList.add('fade-in');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        reasonText.classList.remove('fade-in');
    }, 1000);
    
    // Create extra hearts when button is clicked
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 200);
    }
}

// Add click event listener to the heart button
heartButton.addEventListener('click', showRandomReason);
