const button = document.querySelector("button")
const body = document.body
const colorsDiv = document.querySelector('.colors')

function createFiveColors() {
  colorsDiv.innerHTML = ""
  for(let i = 0; i < 6; i++){     
    const colorCreated = generateRamdomColor()   
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = colorCreated
    const textColor = document.createElement('p')
    textColor.textContent = colorCreated
    textColor.style.color = colorCreated
    colorDiv.appendChild(textColor)
    colorsDiv.appendChild(colorDiv)
    
  }    
  colorsDiv.appendChild('')
} 

function generateRamdomColor() {
  const leters = "1234567890ABCDEF"
  let color = "#"
  for(let i = 0; i < 6; i++ ) {       
    color += leters[Math.floor(Math.random() * leters.length)]       
  }
   return color
  }
  
button.addEventListener('click',  createFiveColors)