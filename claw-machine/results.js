// Declaring variables that select elements on the HTML page so that we can interact with the using code
var playAgain_el = document.querySelector("#play-again")
var download_el = document.querySelector("#download")
var window_el = document.querySelector("#result-window")
var result_img_el = document.querySelector("#result-image")

// Pulls the winning result information from the previous page to this one
var result = sessionStorage.getItem("result")

// this function tells the page to load up with the winning result
function loadPage() {
    window_el.style.opacity = "1"
    window_el.style.transform = "translateY(0px)"
    download_el.style.opacity = "1"
    playAgain_el.style.opacity = "1"
    result_img_el.src = `Assets/preview_imgs/preview${result}.png`
    displayResult();
}

// this actually calls that loading function
loadPage();

// displays the result of the prize
function displayResult() {
    const resultDisplay = document.getElementById('download');

    if (result == 1 || result == 2 || result == 3 || result == 4) {
        resultDisplay.textContent = 'LOLLIES';
    } else if (result == 5 || result == 6 || result == 7) {
        resultDisplay.textContent = 'BADGE';
    } else if (result == 0) {
        resultDisplay.textContent = 'HOODIE';
    }
}

// this tells the website to go back to the game page if the user hits the play again button
playAgain_el.addEventListener("click", ()=> {
    window.location.replace("game.html");
    window_el.style.opacity = "0"
    window_el.style.transform = "translateY(10px)"
    download_el.style.opacity = "0"
    playAgain_el.style.opacity = "0"
})