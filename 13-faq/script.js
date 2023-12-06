const headers = document.querySelectorAll('.accordion-header')

headers.forEach( (header) => {
    header.addEventListener('click', () => {
        
        const item = header.parentNode
        const accordionItem =  document.querySelectorAll('.accordion-item')
        
        const isActive = item.classList.contains('accordion-item-active')       

        accordionItem.forEach( (item) => {
            item.classList.remove('accordion-item-active')
            item.classList.add ('accordion-item-closed')
        })
        
        if(!isActive) {
            item.classList.add('accordion-item-active')
            item.classList.remove('accordion-item-closed')
        }
    })
})