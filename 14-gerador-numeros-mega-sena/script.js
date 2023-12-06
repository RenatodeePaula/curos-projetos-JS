const ball = document.querySelectorAll('.number')

const button = document.querySelector('button')
let result = []
button.addEventListener('click', () => {
    ball.forEach( (num) => {    
        while(result.length < 6) {
            const sortead = Math.floor(Math.random() * 60) + 1   
            if(!result.includes(sortead)) {
                result.push(sortead)
            }
        }
        
       for(let i = 0; i < result.length; i++ ) {
            ball[i].textContent = result[i]
      }

    })
    result = []   
})