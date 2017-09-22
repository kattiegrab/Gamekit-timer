function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + " min " + seconds + " sec";

        if (--timer < 0) {
            time.style.display = "none";
        }
    }, 1000);
}

window.onload = () => {
    let time = 60 * 30,
        display = document.querySelector('#time');
    startTimer(time, display);
};
