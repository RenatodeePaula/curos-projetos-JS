// Crie uma matriz com pares de números representando as cartas
const cards = [1, 1, 2, 2, 3, 3, 4, 4]

// Crie um objeto para armazenar as imagens correspondentes para cada carta
async function generateImagePairs( ) {
    const imagePairs = {}

    for(let i = 0; i < cards.length; i++) {

        if(!imagePairs[cards[i]]) {
            const id = Math.floor(Math.random() * 1000) + 1
            const  url = `https://picsum.photos/id/${id}/200/300`
            imagePairs[cards[i]] = [url, url]
        }
    }    
    return imagePairs
}

// Embaralhe a matriz de cartas
function shuffleCards(cards) {
    cards.sort( () => Math.random() - 0.5)
}

// Selicione as cartas e atribua um número da matriz a cada carta
async function createCards() {
    const imagePairs = await generateImagePairs()
    shuffleCards(cards)
    
    const container = document.querySelector('.container')

    for(let i = 0; i < cards.length; i++) {

        const card = document.createElement('div')
        const cardBack = document.createElement('div')
        const cardFront = document.createElement('div')

        card.classList.add('card')
        cardBack.classList.add('back')
        cardFront.classList.add('front')

        cardBack.style.backgroundImage = `url('./assets/card-back.png')`;
        
        const cardNumber = cards[i];
        const cardImage = imagePairs[cardNumber].pop();
        
        cardFront.style.backgroundImage = `url(${cardImage})`
        card.setAttribute("data-card", cardNumber)

        card.appendChild(cardBack)
        card.appendChild(cardFront)

        container.appendChild(card)

        card.addEventListener('click', flipCard) 
    }
}

createCards()

// Variáveis para armazenar o número d cartas viradas, a primeiro qeu foi clicada, a segunda que foi clicada e número de tentativas.
let flipedCards = 0
let firstCard, secondCard
let attempts = 0

 // Vire as carta clicada
 function flipCard() {   
    if(flipedCards < 2 & !this.classList.contains("flip")) {
        flipedCards++
        this.classList.add("flip")
        if(flipedCards === 1) {
            firstCard = this
        } else {
            secondCard = this
            attempts++
            updateAttempts()
            checkForMatch()
          }            
        } 
    }

// Atualiza o número de tentativas
function updateAttempts() {
    const attemptsElement = document.querySelector('.attempts')
    attemptsElement.textContent = `Tentativas: ${attempts}`
}

// Desabilitar carta que deu match (que forem iguais)
function checkForMatch() {
    const isMatch = firstCard.getAttribute('data-card') === secondCard.getAttribute('data-card')
    isMatch ? disabledCards() : unflipCards() 

}

// Desabilidar as cartas se forem iguais
function disabledCards() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    if (document.querySelectorAll(".card:not(.flip)").length === 0) {
        showCongratulationsMessage()
      }    
      resetBoard();
}

// Parabenizar o jogador que conseguiu ganhar o jogo com o número de tentativas
function showCongratulationsMessage() {
    const congratulationsMessage = document.querySelector('.congratulations-container')
    const congratulationsPhrase = document.createElement('p')
    congratulationsPhrase.classList.add('congratulations')
    congratulationsPhrase.textContent  = `Parabéns você venceu com ${attempts} tentativas!`
    congratulationsMessage.appendChild(congratulationsPhrase) 

}

// Desvira as cartas se não forem iguais
function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetBoard();
    }, 1000);
  }

// Reinicia o tabuleiro
function resetBoard() {
    [firstCard, secondCard, flipedCards] = [null, null, 0]
}
