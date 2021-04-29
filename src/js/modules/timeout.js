const timer = document.querySelector(".timeout__timer");
const title = document.querySelector(".timeout__title");
const hero = document.querySelector(".hero__text-bordered");
const phone = document.querySelector(".phone");
const heroContainer = document.querySelector(".hero");
const form = document.querySelector(".request");


const dropDates = ["2021-4-29", "2021-4-30", "2021-5-1", "2021-5-2", "2021-5-3"];
// const dropDates = ["2021-4-30", "2021-5-1", "2021-5-2", "2021-5-3", "2021-4-29"]; // TODO remove
const startHour = 14; // TODO leave 14
const endHour = 15; // TODO leave 15

const today = new Date();
const todayString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
const todayDropStart = new Date(today.getFullYear(), today.getMonth(), today.getDate(), startHour, 0, 0);
const todayDropEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate(), endHour, 0, 0);
const nextDropStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, startHour, 0, 0);

(function () {
  if (!dropDates.includes(todayString)) {
    showPromoIsOver();
    return;
  }

  const x = setInterval(handleTimer, 1000);

  function formatTime(number) {
    return number >= 10 ? number : `0${number}`;
  }

  function showPromoIsOver() {
    title.innerHTML = ("Акция завершена");
    timer.style.display = 'none';
  }

  function formatCountdown(distance) {
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("min").innerHTML = formatTime(minutes);
    document.getElementById("sec").innerHTML = formatTime(seconds);
  }

  function showForm() {
    form.classList.remove("request--no-form");
  }

  function hideForm() {
    form.classList.add("request--no-form");
  }

  function hideCountdown() {
    timer.style.display = 'none';
  }

  function handleTimer() {
    const now = new Date().getTime();
    let distance;

    // active
    if (now > todayDropStart && now < todayDropEnd) {
      // active
      distance = todayDropEnd - now;
      title.innerHTML = ("Сбор заявок закончится через");
      showForm();
      heroContainer.classList.add("small");
    } else {
      if (now < todayDropStart) {
        // before
        distance = todayDropStart - now;
        title.innerHTML = ("Сбор заявок через");
        hero.style.opacity = '1';
        hero.style.pointerEvents = 'initial';
      } else if (now > todayDropEnd) {
        // after
        distance = nextDropStart - now;
        title.innerHTML = ("Сбор заявок через");
        hero.style.opacity = '1';
        hero.style.pointerEvents = 'initial';
        hideForm();
        if (todayString === dropDates[dropDates.length - 1]) {
          title.innerHTML = ("Регистрация закрыта");
          hideCountdown();
          hero.style.opacity = '0';
          hero.style.pointerEvents = 'none';
          heroContainer.classList.add("small");
        }
      }
    }
    formatCountdown(distance);
  }
})();
