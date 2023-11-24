const backToTopButton = document.querySelector("#back-to-top")

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop

    if(scrollTop > 500) {
        backToTopButton.addEventListener('click', () => {
            backToTopButton.style.display = 'block'
        })
    }
})