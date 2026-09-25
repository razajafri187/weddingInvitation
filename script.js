const doorScreen = document.getElementById("doorScreen");
const openButton = document.getElementById("openInvitation");
const invitation = document.getElementById("invitation");
const music = document.getElementById("weddingMusic");


openButton.addEventListener("click", () => {

    // Open the doors
    doorScreen.classList.add("open");

    // Show invitation
    setTimeout(() => {

        invitation.classList.add("show");

    }, 700);


    // Try to start music
    music.play().catch(() => {

        console.log("Music requires user interaction.");

    });

});



/* =================================
   COUNTDOWN
================================= */

const weddingDate =
    new Date("December 20, 2026 20:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference =
        weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
            (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days")
        .textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);