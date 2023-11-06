const cpfElement = document.querySelector('#cpf-paragraph')
const generateBtn = document.querySelector('#generateBtn')
const copyBtn = document.querySelector('#copyBtn')

function gerarCpf() {
    let number = Math.floor(Math.random() * 999999999 + 1)
    let numberString = number.toString().padStart(number.length, "0")
    let digitValid1 = calcDigitValid(numberString, 10)
    let digtValid2 = calcDigitValid(numberString + digitValid1, 11)

    cpfElement.innerHTML = formatarCPF(numberString + digitValid1 + digtValid2)

    copyBtn.classList.remove('btn2')
}

function calcDigitValid(number, weight) {
    let total = 0
    for (let i  = 0; i < number.length; i++) {
        total += parseInt(number.charAt(i)) * weight--
    }
    let rest = total % 11
    return rest < 2 ? 0 : 11 - rest
}

function formatarCPF(cpf) {
    const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/
    return cpf.replace(regex, "$1.$2.$3-$4")
}

function copyCpf() {
    const cpf = cpfElement.innerHTML
    navigator.clipboard.writeText(cpf).then(
        () => {
            alert(`CPF ${cpf} copiado para área de transferencia.`)
        },
        (error) => {
            console.log("Erro ao copiar CPF")
        }
    )
}

generateBtn.addEventListener('click', gerarCpf)
copyBtn.addEventListener('click', copyCpf)