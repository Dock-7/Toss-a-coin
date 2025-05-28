let headCount = 0;
let tailCount = 0;
let totalCount = 0;
let history = [];

function tossCoin() {
  const resultText = document.getElementById("resultText");
  const coinImage = document.getElementById("coinImage");
  const coin = document.getElementById("coin");

  resultText.textContent = "Your Coin in the air...";
  coinImage.style.display = "none"; // hide during spin

  // Reset animation
  coin.classList.remove("rotating");
  void coin.offsetWidth; // reflow trick to restart animation
  coin.classList.add("rotating");

  // Delay showing result till spin ends (2 seconds = 2000ms)
  setTimeout(() => {
    const result = Math.random() < 0.5 ? "Head" : "Tail";
    const imagePath = result === "Head" ? "Head.png" : "Tail.png";

    coinImage.src = imagePath;
    coinImage.style.display = "block";
    resultText.textContent = result;
   updateStats(result);
  }, 2000);
}

function updateStats(result) {
  totalCount++;
  if (result === "Head") {
    headCount++;
  } else {
    tailCount++;
  }

  document.getElementById("totalCount").textContent = totalCount;
  document.getElementById("headCount").textContent = headCount;
  document.getElementById("tailCount").textContent = tailCount;

  // Add to history
  history.unshift(result);
  if (history.length > 5) history.pop(); // keep last 5

  const historyList = document.getElementById("historyList");
  historyList.innerHTML = "";
  history.forEach((entry, index) => {
    const li = document.createElement("li");
    li.textContent = `#${totalCount - index}: ${entry}`;
    historyList.appendChild(li);
  });
}