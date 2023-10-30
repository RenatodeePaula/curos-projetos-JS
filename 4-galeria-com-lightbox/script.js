const images = document.querySelectorAll(".gallery-item")
const lightBoxImage = document.querySelector('.lightbox-image')
const lightBox = document.querySelector('.lightbox')
const lightClose = document.querySelector('.lightbox-close')

images.forEach((item) => {
    item.addEventListener('click', () => {
       const imgSelected = item.querySelector('.gallery-image').getAttribute('data-src')
       lightBoxImage.setAttribute('src', imgSelected)
       lightBox.style.display = 'flex'
    })
})
lightClose.addEventListener('click', () =>  {
    lightBox.style.display = 'none'
} )