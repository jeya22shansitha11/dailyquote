const quotes = [
  {
    text: "Push yourself, because no one else is going to do it for you.",
    image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1500&q=80"
  },
  {
    text: "Great things never come from comfort zones.",
    image: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1500&q=80"
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1500&q=80"
  },
  {
    text: "Success doesn’t just find you. You have to go out and get it.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=80"
  },
  {
    text: "Dream it. Wish it. Do it.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1500&q=80"
  }
];

const quoteText = document.getElementById("quoteText");
const getQuoteBtn = document.getElementById("getQuoteBtn");

getQuoteBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  const selected = quotes[random];

  quoteText.textContent = selected.text;
  document.body.style.backgroundImage = `url('${selected.image}')`;
});
