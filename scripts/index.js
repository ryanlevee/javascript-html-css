const quotes = [
  "\"Since I started using Play2Learn, I've become smarter than all my friends!" +
  "<br>" + "Time for some new friends!\"",
  "\"I was having so much fun playing Math Facts Practice, I LITERALLY passed out!\"",
  "\"Anagram Hunt is the most rewarding thing I have ever experienced. Ever.\""
];
const credits = [
"Boba Fett",
"Pam Beesly",
"Bob Cratchit"
]

function changeQuote() {
  let q = 1;
  let c = 1
  setInterval(function () {
    q = (q+1) % quotes.length;
    document.getElementById('quote').innerHTML = quotes[q];
    document.getElementById('credit').innerHTML = credits[c];
    c = (c+1) % credits.length;
  }, 10000);
}

window.addEventListener('load', changeQuote())
