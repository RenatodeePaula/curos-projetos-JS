const billAmount = document.querySelector('#bill-amount')
const qualityService = document.querySelector('#quality-service')

const btnCalc = document.querySelector('#btn-calc')

const tipAmount = document.querySelector('#tip-amount')
const total = document.querySelector('#total')  

btnCalc.addEventListener('click', () =>  {  
    let tip = +(billAmount.value) * +(qualityService.value)
    tipAmount.value = `R$ ${tip.toFixed(2).replace("." , ",")}`
    let totalValue = tip + +(billAmount.value)
    total.value = `R$ ${totalValue.toFixed(2).replace(".", ",")}`   
})