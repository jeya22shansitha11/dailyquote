const quotes = [
  "Believe you can and you're halfway there.",
  "Push yourself, because no one else is going to do it for you.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Dream it. Wish it. Do it.",
  "Great things never come from comfort zones."
];

function getQuote() {
  const quoteText = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.innerText = quotes[randomIndex];
  
  // Optional: Change background color
  const colors = ['#00c6ff', '#ff6a00', '#8e2de2', '#4a00e0', '#00b09b'];
  const body = document.body;
  const color = colors[Math.floor(Math.random() * colors.length)];
  body.style.background = `linear-gradient(to right, ${color}, #000)`;
}
