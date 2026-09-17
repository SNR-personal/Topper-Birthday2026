let currentWindow = 1;

function nextWindow() {

    document
        .getElementById("window" + currentWindow)
        .classList.remove("active");

    currentWindow++;

    document
        .getElementById("window" + currentWindow)
        .classList.add("active");
}


function restart() {

    document
        .getElementById("window" + currentWindow)
        .classList.remove("active");

    currentWindow = 1;

    document
        .getElementById("window1")
        .classList.add("active");
}


// Open photo

function openPhoto(photo) {

    document.getElementById("fullPhoto").src = photo;

    document.getElementById("photoViewer").style.display = "flex";
}


// Close photo

function closePhoto() {

    document.getElementById("photoViewer").style.display = "none";

    document.getElementById("fullPhoto").src = "";
}

const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

function toggleMusic() {

    if (music.paused) {
        music.play();
        musicButton.innerHTML = "🔊 Music";
    } else {
        music.pause();
        musicButton.innerHTML = "🔇 Music";
    }
}