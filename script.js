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
  },
  {
    text: "You don’t have to be great to start, but you have to start to be great.",
    image: "https://images.unsplash.com/photo-1515165562835-c2c9e7b9f8a8?auto=format&fit=crop&w=1500&q=80"
  },
  {
    text: "Believe in yourself. Even if no one else does.",
    image: "https://images.unsplash.com/photo-1531266752463-1fb0b0c6f663?auto=format&fit=crop&w=1500&q=80"
  },
  {
    text: "Dream big. Start small. Act now.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1500&q=80"
  },
  {
    text: "Discipline is the bridge between goals and success.",
    image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1500&q=80"
  },
  {
    text: "Don’t be afraid to start over. It’s a chance to rebuild better.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1500&q=80"
  },
  {
    text: "Your future is created by what you do today, not tomorrow.",
    image: "https://images.unsplash.com/photo-1490135900374-3b3e92f52254?auto=format&fit=crop&w=1500&q=80"
  },
  {
    text: "Consistency is more important than perfection.",
    image: "https://images.unsplash.com/photo-1533055640609-24b498cdfaff?auto=format&fit=crop&w=1500&q=80"
  },
  {
    text: "Fall seven times, stand up eight.",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=1500&q=80"
  },
  {
    text: "Stay hungry, stay foolish.",
    image: "https://images.unsplash.com/photo-1516569422550-3ad9c8e1f61c?auto=format&fit=crop&w=1500&q=80"
  },
  {
    text: "Do something today that your future self will thank you for.",
    image: "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1500&q=80"
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
