const form = document.querySelector('form')
const nome = document.querySelector('#nome')  
const email = document.querySelector('#email')  
const assunto = document.querySelector('#assunto')
const mensagem =  document.querySelector('#mensagem')
const mensagensDeErro = document.querySelectorAll('.error-message')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    removeErrors()
    validateInputs()
})

function removeErrors() {
    mensagensDeErro.forEach((message) => {
        message.textContent = ""
        const inputForClassRemove = message.previousElementSibling
        inputForClassRemove.classList.remove('error-input')
    })    
}

function validateInputs() {
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const assuntoValue = assunto.value.trim()
    const mensagemValue = mensagem.value.trim()

    if(nomeValue === '') {
       setError(nome, "Nome não pode ficar em branco") 
       
    }

    if(emailValue === "" ) {
        setError(email, "Email não pode ficar em branco")       
        
     } else if(emailValue === "") {
        setError(email, "Email não pode ficar em branco")
     } else if(!isValidEmail(emailValue)) {
        setError(email, "Email inválido" )
     }

     if(assuntoValue === '') {
        setError(assunto, "Nome não pode ficar em branco")         
     }

     if(mensagemValue === '') {
        setError(mensagem, "Nome não pode ficar em branco")         
     }    
}

function setError(input, errorMessage) {
    const errorMessageElement = input.nextElementSibling
    errorMessageElement.textContent = errorMessage
    input.classList.add('error-input') 
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}