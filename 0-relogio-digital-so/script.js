const getHours = document.querySelector(".hours")
const getMinutes = document.querySelector(".minutes")
const getSeconds = document.querySelector(".seconds")

function clock() {
    // const hours = getHours.textContent
    // const minutes = getMinutes.textContent
    // const seconds = getSeconds.textContent

    const date = new Date()
    const hours = date.getHours().toString()
    const minutes = date.getMinutes().toString()
    const seconds = date.getSeconds().toString()

    getHours.textContent = hours.padStart(2, "0")
    getMinutes.textContent = minutes.padStart(2, "0")
    getSeconds.textContent = seconds.padStart(2, "0")

    // console.log(`${hours}:${minutes}:${seconds}`)
}
clock()
setInterval(clock, 1000)
