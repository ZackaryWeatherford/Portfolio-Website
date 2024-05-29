const sentences = [
    "I love web development.",
    "I love game development.",
    "I love desktop development."
];
let currentSentence = 0;
let currentChar = 0;
const typingElement = document.getElementById('typing');
const typingSpeed = 100; // Adjust typing speed (in milliseconds)
const erasingSpeed = 50; // Adjust erasing speed (in milliseconds)
const delayBetweenSentences = 2000; // Delay between sentences (in milliseconds)

function type() {
    if (currentChar < sentences[currentSentence].length) {
        typingElement.textContent += sentences[currentSentence].charAt(currentChar);
        currentChar++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenSentences);
    }
}

function erase() {
    if (currentChar > 6) {
        typingElement.textContent = sentences[currentSentence].substring(0, currentChar - 1);
        currentChar--;
        setTimeout(erase, erasingSpeed);
    } else {
        currentSentence = (currentSentence + 1) % sentences.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, delayBetweenSentences);
});