const progressBar = document.querySelector('.progress')
const btns = document.querySelectorAll('.btn')

let progress = 0

function updateProgressBar() {
    progress > 100 ? progress = 100 :
    progress < 0 ? progress =  0 :

    progressBar.style.width = progress + '%'
}

btns.forEach((item) => {
    item.addEventListener('click', () => {      
        if(item.id === 'btn1') {
            progress -= 10
            updateProgressBar()
        } else if(item.id ==='btn2') {
            progress += 10
            updateProgressBar()
        }    
    })   
})
