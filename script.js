console.log("hello world")

// progress bars
const hungerBar = document.getElementById("hungerBar")
const thirstBar = document.getElementById("thirstBar")
const energyBar = document.getElementById("energyBar")

// bars lopen leeg
interval = setInterval(leegHealthBar, 10)
function leegHealthBar() {
    hungerBar.value-=0.07
    thirstBar.value-=0.06
    energyBar.value-=0.04

    // game over en lower bar
    if (hungerBar.value === 0  || thirstBar.value === 0 || energyBar.value === 0) {
        clearInterval(interval)
        //game over scherm komt tevoorschijn
        document.getElementById("sectionGameOver").style.visibility = "visible"
        document.getElementById("katFace").src="katPlaatjes/catGameGezichtDood.png"
        let audio = new Audio("sounds/catDeath.mp3")
        audio.play()
        lock()
    } else if (hungerBar.value <= 25  || thirstBar.value <= 25 || energyBar.value <= 25) {
        document.getElementById("katFace").src ="katPlaatjes/catGameGezichtDroevig.png"
    }
}
// restart game
const reloadButton = document.getElementById("probeerOpnieuwButton")
function restart() {
    location.reload()
}
reloadButton.addEventListener("click", restart)

// bar gaat omhoog

    //Eten bar
const feedButton = document.getElementById("voer")
function eat() {
    hungerBar.value+=12
    document.getElementById("katFace").src ="katPlaatjes/catGameGezichtBlij.png"
    setTimeout(function() {
        document.getElementById("katFace").src ="katPlaatjes/catGameGezichtNormaal.png"
    }, 800)
}
feedButton.addEventListener("click", eat)

    //Drinken bar
const drinkButton = document.getElementById("water")
function drink() {
    thirstBar.value+=13
    document.getElementById("katFace").src ="katPlaatjes/catGameGezichtBlij.png"
    setTimeout(function() {
        document.getElementById("katFace").src ="katPlaatjes/catGameGezichtNormaal.png"
    }, 800)
}
drinkButton.addEventListener("click", drink)

    //Energy bar
const sleepButton = document.getElementById("bank")
function sleep() {
    energyBar.value+=20
    document.getElementById("katBody").src ="katPlaatjes/catGameKatSlaapt.png"
    document.getElementById("katFace").style.visibility = "hidden"
    document.getElementById("katBody").style.left = "50%"
    document.getElementById("katBody").style.bottom = "15%"
     setTimeout(function() {
        document.getElementById("katFace").style.visibility = "visible"
        document.getElementById("katBody").src ="katPlaatjes/catGameKatBody.png"
        document.getElementById("katBody").style.left = "60%"
        document.getElementById("katBody").style.bottom = "-4%"
    }, 1000)
}
sleepButton.addEventListener("click", sleep)

// lock en unlock
function lock() {
    document.getElementById("water").style.pointerEvents = "none"
    document.getElementById("voer").style.pointerEvents = "none"
    document.getElementById("bank").style.pointerEvents = "none"
}

function unlock() {
     document.getElementById("water").style.pointerEvents = "auto"
     document.getElementById("voer").style.pointerEvents = "auto"
     document.getElementById("bank").style.pointerEvents = "auto"
}
