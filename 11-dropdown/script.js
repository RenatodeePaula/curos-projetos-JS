const backToTopButton = document.querySelector("#back-to-top")

window.addEventListener('scroll', function()  {
    const scrollTop = document.documentElement.scrollTop

    if(scrollTop > 500) {        
            backToTopButton.style.display = 'block'
                
    } else {    
        backToTopButton.style.display = "none"
    }
})

backToTopButton.addEventListener('click', (event) => {
    event.preventDefault()

    window.scrollTo({
        top:0,
        behavior: "smooth",
    })
})