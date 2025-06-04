"use strict";
const pickANumber = document.getElementById("pickANumber");
const result = document.getElementById("result");
const flexContainer = document.getElementById("flexContainer");

const gifts = [
  "₹ 100 cash",
  "Toy Car",
  "Chocolate Box",
  "₹ 500 cash",
  "Smart Phone Cover",
  "Book",
  "Head phones",
  "₹ 50 Cash",
  "Gift Voucher",
  "Watch",
  "Teddy Bear",
  "₹ 1000 Cash",
  "Gift Card",
  "₹ 200 Cash",
  "Pen Set",
  "₹ 300 Cash",
  "Puzzle Game",
  "Board Game",
  "₹ 150 Cash",
  "Water Bottle",
  "₹ 100 cash",
  "Toy Car",
  "Chocolate Box",
  "₹ 500 cash",
  "Smart Phone Cover",
  "Book",
  "Head phones",
  "₹ 50 Cash",
  "Gift Voucher",
  "Watch",
  "Teddy Bear",
  "₹ 1000 Cash",
  "Gift Card",
  "₹ 200 Cash",
  "Pen Set",
  "₹ 300 Cash",
  "Puzzle Game",
  "Board Game",
  "₹ 150 Cash",
  "Water Bottle",
  "Teddy Bear",
  "₹ 1000 Cash",
  "Gift Card",
  "₹ 200 Cash",
  "Pen Set",
  "₹ 300 Cash",
  "Puzzle Game",
  "Board Game",
  "₹ 150 Cash",
  "Water Bottle",
];
const tick = new Audio("snd_lotteryGame.mp3");
const complete = new Audio("complete_sound.mp3");
pickANumber.addEventListener("click", function () {
  for (let i = 1; i <= 50; i++) {
    document.getElementById(i).classList.remove("winningBox");
  }
  result.textContent = "Please Wait...";
  // let timerId = setTimeout(function () {
  //   const drawnNumber = Math.floor(Math.random() * 50) + 1;
  //   result.textContent = drawnNumber;
  //   result.textContent += " - " + gifts[drawnNumber - 1];
  //   document.getElementById(drawnNumber).classList.add("winningBox");
  //   clearInterval(intervalId);
  // }, 3000);
  let secCount = 0;
  let intervalId = setInterval(function () {
    tick.pause();
    tick.currentTime = 0;
    tick.play();
    secCount += 1;
    let randum = Math.floor(Math.random() * 50) + 1;
    for (let i = 1; i <= 50; i++) {
      if (i === randum) {
        document.getElementById(i).classList.add("highlitedBox");
      } else {
        document.getElementById(i).classList.remove("highlitedBox");
      }
    }

    if (secCount === 15) {
      const drawnNumber = Math.floor(Math.random() * 50) + 1;
      tick.pause();
      tick.currentTime = 0;
      result.textContent = drawnNumber;
      result.textContent += " - " + gifts[drawnNumber - 1];
      document.getElementById(randum).classList.remove("highlitedBox");
      document.getElementById(drawnNumber).classList.add("winningBox");
      complete.pause();
      complete.currentTime = 0;
      complete.play();
      clearInterval(intervalId);
    }
  }, 200);
});

gifts.forEach(function (value, i) {
  const boxElement = `<div class='box' id=${i + 1}>${i + 1}. ${value}</div>`;
  flexContainer.insertAdjacentHTML("beforeend", boxElement);
});
