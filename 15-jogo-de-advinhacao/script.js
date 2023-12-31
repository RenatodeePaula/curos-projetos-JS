const selectDificulty = document.querySelector('#difficulty')
const guessSection = document.querySelector('#guess-section')
const guessInput = document.querySelector('#guess-input')
const triesLeftSpan = document.querySelector('#tries-left')
const result = document.querySelector('#result')
const gameSection = document.querySelector('#game-section')
const dificultSection = document.querySelector('#difficulty-section')
const resetBtn = document.querySelector('#reset-btn')
const guessBtn = document.querySelector('#guess-btn')
const recordParagraph = document.querySelector('#record')


let maxTries
let randomNumber
let response = ""
let remainingAttempts = 0
let record = 10

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
   guessSection.style.display = "flex" 
   triesLeftSpan.textContent = maxTries  

   randomNumber = Math.floor(Math.random() * 100 + 1) 
})

guessBtn.addEventListener('click', () => {
    let response = +guessInput.value

    if(response < 1 || response > 100) {
        alert('Digite um número de 1 a 100!')  
        guessInput.value = ""    

    } else {         
        maxTries = maxTries - 1
        remainingAttempts = remainingAttempts + 1     
        
        triesLeftSpan.textContent = maxTries        
        guessInput.value = ""       

        result.textContent = `${hitAnalyzer(response, randomNumber, maxTries, remainingAttempts)}`       
    }
})

function hitAnalyzer(resp, randNum, attemp, tLeft) {
    if(attemp >= 0 ) {      
        if(resp < randNum) {
            return "Número baixo, tente novamente!"
        } else if(resp > randNum) {             
            return "Número alto, tente novamente!"
        } else if(resp === randNum) { 
            resetBtn.style.display = "block"
            guessSection.style.display = "none"                   
            
            if(tLeft < record) {
                record = tLeft 
                recordParagraph.style.display = 'block'
                recordParagraph.textContent = `Novo record ${record} tentativas!`
               
            } else {
                recordParagraph.style.display = 'block'
                recordParagraph.textContent = `Record atual ${record} tentativas!`
            }
            return `Parabéns você acertou com ${tLeft} tentativas! `
        }
   } else if(attemp <= 0) {
        resetBtn.style.display = "block"
        guessSection.style.display = "none"      
        
    return  result.textContent = `Suas tentativas acabaram, o número correto é ${randNum}.`
   }
   console.log(randNum)
}

resetBtn.addEventListener('click', () => {     
    gameSection.style.display = 'none'
    dificultSection.style.display = "flex"  
    guessSection.style.display = "none"   
    result.textContent = ""
    resetBtn.style.display = "none" 
    selectDificulty.value = ""   
    recordParagraph.style.display = "none" 
    remainingAttempts = 0
})