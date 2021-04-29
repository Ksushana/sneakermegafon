function submittedForm() {
  const submitSuccess = document.querySelector('.request__success');

  submitSuccess.classList.add("isShown")
}
const timer = document.querySelector(".timeout__timer");
const title = document.querySelector(".timeout__title");
const countDownDate = new Date(timer.dataset.time).getTime();
const countDownDateAfter = new Date(timer.dataset.timeClose).getTime();
const phone = document.querySelector(".phone");
const form = document.querySelector(".request");

const x = setInterval(function() {

  const now = new Date().getTime();

  const distanceBefore = countDownDate - now;
  const distanceAfter = countDownDateAfter - now;


  const distance = distanceBefore > 0 ? distanceBefore : distanceAfter;

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("min").innerHTML = formatTime(minutes);
  document.getElementById("sec").innerHTML = formatTime(seconds);
  title.innerHTML = ("Сбор заявок через");

  if (distanceBefore < 0) {
    title.innerHTML = ("Регистрация закроется через");
    form.classList.remove("request--no-form");
  }

  if (distanceAfter < 0) {
    title.innerHTML = ("Регистрация закрыта");
    timer.style.display = 'none';
    form.classList.add("request--no-form");
  }
}, 1000);


function formatTime(number) {
  return number >= 10 ? number : `0${number}`;
}