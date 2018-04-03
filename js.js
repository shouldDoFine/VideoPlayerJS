// Debugging (remove this code after debugging)
// alert("Loaded JS script!");

// Google 'let' keyword for JavaScript - it is the same as 'var' basically (but was added later to the language)
let player;

window.onload = function () {

    // TODO
    // Rewrite this using jQuery

    player = document.getElementById("video_player");

    let controls = {
        duration: document.getElementById("duration"),
        currentTime: document.getElementById("current_time"),
        progressBar: document.getElementById("progress_bar"),
        currentBar: document.getElementById("current_bar")
    };

    controls.duration.innerHTML = formatTime(player.duration);
    controls.currentTime.innerHTML = formatTime(0);

    // Debugging (remove this code after debugging)
    // alert("Adding event listeners for player ...");

    player.addEventListener("timeupdate", function () {
        // Debugging (remove this code after debugging)
        // alert("timeupdate event!");

        controls.currentTime.innerHTML = formatTime(player.currentTime);
        let progress = Math.floor(player.currentTime) / Math.floor(player.duration);
        // TODO
        // Use jQuery to substitute ugly 'controls.progressBar.getBoundingClientRect().width' with something like '$("#myDiv").width()'
        // See https://stackoverflow.com/questions/294250/how-do-i-retrieve-an-html-elements-actual-width-and-height
        controls.currentBar.style.width = Math.floor(progress * controls.progressBar.getBoundingClientRect().width) + "px";
    }, false);

    // TODO
    // Do we need video buffering ? If we do, then implement the following event listener:
    // player.addEventListener("currentBar", function () {
    //     // Debugging (remove this code after debugging)
    //     // alert("currentBar event!");
    //
    //     let buffered = Math.floor(player.buffered.end(0)) / Math.floor(player.duration);
    //     controls.buffered[0].style.width = Math.floor(buffered * controls.progressBar.width()) + "px";
    // }, false);

    // TODO
    // Handle user clicks on currentBar bar somehow ().
};

function playOrPause() {
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}

function stop() {
    player.pause();
    player.currentTime = 0;
}

function decreaseVol() {
    if (player.volume > 0) {
        player.volume += -.1;
    }
}

function increaseVol() {
    if (player.volume < 1) {
        player.volume += .1;
    }
}

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    return withLeadingZeros(minutes) + ":" + withLeadingZeros(seconds);
}

function withLeadingZeros(n) {
    return n

    // TODO
    // Implement this logic properly

    // let result = "" + n;
    // for (let i = 0; i < 2; i++) {
    //     result = "0" + result;
    // }
    // return result;
}
