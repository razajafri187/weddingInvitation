const doorScreen = document.getElementById("doorScreen");
const openButton = document.getElementById("openInvitation");
const invitation = document.getElementById("invitation");
const music = document.getElementById("weddingMusic");

// ===============================
// OPEN INVITATION
// ===============================

openButton.addEventListener("click", () => {
  doorScreen.classList.add("open");

  setTimeout(() => invitation.classList.add("show"), 700);

  music.play().catch(() => {
    console.log("Music requires user interaction.");
  });
});

// ===============================
// COUNTDOWN
// ===============================

const weddingDate = new Date("2026-10-07T19:00:00+05:00").getTime();

const countdownEls = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

const pad = (n) => String(n).padStart(2, "0");

function updateCountdown() {
  const distance = Math.max(weddingDate - Date.now(), 0);

  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;

  countdownEls.days.textContent = pad(Math.floor(distance / DAY));
  countdownEls.hours.textContent = pad(Math.floor((distance % DAY) / HOUR));
  countdownEls.minutes.textContent = pad(Math.floor((distance % HOUR) / MINUTE));
  countdownEls.seconds.textContent = pad(Math.floor((distance % MINUTE) / SECOND));
}

updateCountdown();
setInterval(updateCountdown, 1000);