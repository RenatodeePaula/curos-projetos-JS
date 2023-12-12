const guessSection = document.querySelector('#guess-section')
const guessInput = document.querySelector('#guess-input')
const selectDificulty = document.querySelector('#difficulty')
const triesLeftSpan = document.querySelector('#tries-left')
const result = document.querySelector('#result')
const gameSection = document.querySelector('#game-section')
const dificultSection = document.querySelector('#difficulty-section')
const resetBtn = document.querySelector('#reset-btn')
const guessBtn = document.querySelector('#guess-btn')
const explanation = document.querySelector('#explanation')

let maxTries
let randomNumber
let triesLeft

selectDificulty.addEventListener('change', () => {
   const dificultValue = +selectDificulty.value   

   switch(dificultValue) {
    case 1:
        maxTries = 10
        break;
    case 2:
        maxTries = 7
        break;
    case 3:
        maxTries = 5
         break;
    default:
        maxTries = 10        
        break;
   }

   dificultSection.style.display = "none"
   gameSection.style.display = 'flex'
   triesLeft = maxTries
   triesLeftSpan.textContent = maxTries   

   randomNumber = Math.floor(Math.random() * 100 + 1) 
})

let response = ""

guessBtn.addEventListener('click', () => {
    let response = +guessInput.value

    if(response < 1 || response > 100) {
        alert('Digite um número de 1 a 100!')  
        guessInput.value = ""    

    } else {         
        maxTries = maxTries - 1
        triesLeftSpan.textContent = maxTries

        guessInput.value = ""       

        result.textContent = `${hitAnalyzer(response, randomNumber, maxTries)}`       
    }
})

function hitAnalyzer(resp, randNum, attemp) {
    if(attemp > 0 )  {        
        console.log(`resposta dada = ${resp}, número aleatorio =  ${randNum}, tentativas restantes = ${attemp}`)

        if(resp < randNum) {
            return "Número baixo, tente novamente!"
        } else if(resp > randNum) {             
            return "Número alto, tente novamente!"
        } else if(resp === randNum) { 
            resetBtn.style.display = "block"
            
            return "Parabéns você acertou!"
        }
   } else if(attemp <= 0) {
        resetBtn.style.display = "block"
        guessSection.style.display = "none"
        explanation.style.display = "none"  
        
    return  result.textContent = `Suas tentativas acabaram, o número correto é ${randNum}.`
   }
}

resetBtn.addEventListener('click', () => {   
    location.reload()
})