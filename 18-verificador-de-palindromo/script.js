const input = document.querySelector('input')
const verify = document.querySelector('#check')
const result = document.querySelector('p')

function verificar() {    
    const palavra = input.value
    const palavraInvertida = palavra.split("").reverse().join("")    
  
    if(palavra.toLocaleLowerCase() === palavraInvertida.toLocaleLowerCase()) {
      result.textContent = `A palavra "${palavra}" é um palíndromo`
    } else {
       result.textContent = `A palavra "${palavra}", não é um palíndromo`
    }
}
verify.addEventListener('click', verificar)

input.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        e.preventDefault()
        verificar()
    }
})