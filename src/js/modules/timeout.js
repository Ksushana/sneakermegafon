const timer = document.querySelector(".timeout__timer");
const countDownDate = new Date(timer.dataset.time).getTime();

const x = setInterval(function() {

  const now = new Date().getTime();

  const distance = countDownDate - now;

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("min").innerHTML = formatTime(minutes);
  document.getElementById("sec").innerHTML = formatTime(seconds);

  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


function formatTime(number) {
  return number >= 10 ? number : `0${number}`;
}