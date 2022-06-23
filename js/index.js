// Variáveis para o timer
let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause')
let buttonStop = document.querySelector('.stop')
let buttonAddOne = document.querySelector('.addOne')
let buttonLessOne = document.querySelector('.lessOne')
let displayMinutes = document.querySelector('.minutes')
let displaySeconds = document.querySelector('.seconds')

// Lógica do Timer

// Funções do Timer
let timerRun  

function countdown() {
    timerRun = setTimeout(function() {
        let minutes = Number(displayMinutes.textContent)
        let seconds = Number(displaySeconds.textContent)
        
        if (minutes <= 0 && seconds <=0) {
            resetTimer()
            kitchenTimer.play()
            return
        }
        
        if (seconds <= 0) {
        minutes -= 1
        
        seconds = 4
        
        displayMinutes.textContent = String(minutes).padStart(2, "0")
    }
    
    displaySeconds.textContent = String(seconds - 1).padStart(2, "0")
    
    countdown()
}, 1000)
}

let initialMinutes = undefined
function resetTimer() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')

    initialMinutes = initialMinutes == undefined ? 25 : initialMinutes
    displayMinutes.textContent = initialMinutes

    displaySeconds.textContent = "00"
}


// Eventos do Timer
buttonAddOne.addEventListener('click', function() {
    let minutes = Number(displayMinutes.textContent)
    minutes += 5
    displayMinutes.textContent = String(minutes).padStart(2, "0")
    initialMinutes = String(minutes).padStart(2, "0")
})

buttonLessOne.addEventListener('click', function() {
    let minutes = Number(displayMinutes.textContent)
    
    if (minutes <= 0) {
        alert("Não é possível selecionar minutos negativos")
        minutes = 0
        displayMinutes.textContent = String(minutes).padStart(2, "0")
        return
    }

    minutes -= 5
    displayMinutes.textContent = String(minutes).padStart(2, "0")
    initialMinutes = String(minutes).padStart(2, "0")
})

buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')

    if (displayMinutes.textContent == "0") {
        kitchenTimer.play()
        resetTimer()
        return
    }

    countdown()
})
    
buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')

    clearTimeout(timerRun)
})

buttonStop.addEventListener('click', function() {
    let minutes = Number(displayMinutes.textContent)
    
    if (minutes <= 0) {
        return
    }
    clearTimeout(timerRun)
    
    resetTimer()
})

//Variáveis para o sounds
let buttonForest = document.querySelector('.forest')
let buttonForestS = document.querySelector('.forestS')
let buttonRain = document.querySelector('.rain')
let buttonRainS = document.querySelector('.rainS')
let buttonCafe = document.querySelector('.cafe')
let buttonCafeS = document.querySelector('.cafeS')
let buttonFire= document.querySelector('.fire')
let buttonFireS= document.querySelector('.fireS')
let buttonForestSound= document.querySelector('.forestSound')
let buttonRainSound= document.querySelector('.rainSound')
let buttonCafeSound= document.querySelector('.cafeSound')
let buttonFireSound= document.querySelector('.fireSound')
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

// Eventos para o sounds
buttonForest.addEventListener('click', function() {
    buttonForest.classList.add('hide')
    buttonForestS.classList.remove('hide')
    
    buttonRainS.classList.add('hide')
    buttonCafeS.classList.add('hide')
    buttonFireS.classList.add('hide')

    buttonRain.classList.remove('hide')
    buttonCafe.classList.remove('hide')
    buttonFire.classList.remove('hide')

    buttonForestSound.play()
    buttonRainSound.pause()
    buttonCafeSound.pause()
    buttonFireSound.pause()
})
buttonForestS.addEventListener('click', function() {
    buttonForestS.classList.add('hide')
    buttonForest.classList.remove('hide')

    buttonForestSound.pause()
})

buttonRain.addEventListener('click', function() {
    buttonRain.classList.add('hide')
    buttonRainS.classList.remove('hide')

    buttonForestS.classList.add('hide')
    buttonCafeS.classList.add('hide')
    buttonFireS.classList.add('hide')

    buttonForest.classList.remove('hide')
    buttonCafe.classList.remove('hide')
    buttonFire.classList.remove('hide')

    buttonRainSound.play()
    buttonForestSound.pause()
    buttonCafeSound.pause()
    buttonFireSound.pause()
})
buttonRainS.addEventListener('click', function() {
    buttonRainS.classList.add('hide')
    buttonRain.classList.remove('hide')

    buttonRainSound.pause()
})

buttonCafe.addEventListener('click', function() {
    buttonCafe.classList.add('hide')
    buttonCafeS.classList.remove('hide')

    buttonForestS.classList.add('hide')
    buttonRainS.classList.add('hide')
    buttonFireS.classList.add('hide')

    buttonForest.classList.remove('hide')
    buttonRain.classList.remove('hide')
    buttonFire.classList.remove('hide')

    buttonCafeSound.play()
    buttonRainSound.pause()
    buttonForestSound.pause()
    buttonFireSound.pause()
})
buttonCafeS.addEventListener('click', function() {
    buttonCafeS.classList.add('hide')
    buttonCafe.classList.remove('hide')

    buttonCafeSound.pause()
})

buttonFire.addEventListener('click', function() {
    buttonFire.classList.add('hide')
    buttonFireS.classList.remove('hide')

    buttonForestS.classList.add('hide')
    buttonRainS.classList.add('hide')
    buttonCafeS.classList.add('hide')

    buttonForest.classList.remove('hide')
    buttonRain.classList.remove('hide')
    buttonCafe.classList.remove('hide')

    buttonFireSound.play()
    buttonRainSound.pause()
    buttonCafeSound.pause()
    buttonForestSound.pause()
})
buttonFireS.addEventListener('click', function() {
    buttonFireS.classList.add('hide')
    buttonFire.classList.remove('hide')

    buttonFireSound.pause()
})