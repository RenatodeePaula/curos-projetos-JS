const item = document.querySelector('.item')
item.setAttribute('draggable', true)

const columEnd = document.querySelector('#column-end')
const columnStart = document.querySelector('#column-start')

let dragged 

//quando o item estiver na primeira coluna faça:
columnStart.addEventListener('dragstart', (event) => {   
    dragged = event.target   
})


columEnd.addEventListener('dragover', (event) => {
    event.preventDefault()
})

columEnd.addEventListener('drop' , (event) => {
    event.target.appendChild(dragged)
})

//quando o item estiver na segunda coluna faça:

columEnd.addEventListener('dragstart', (event) => {   
    dragged = event.target   
})

columnStart.addEventListener('dragover', (event) => {
    event.preventDefault()
})

columnStart.addEventListener('drop' , (event) => {
    event.target.appendChild(dragged)
})