const converterForm =  document.querySelector("#converterForm")
const converterInput =  document.querySelector("#converterInput")
const jsonToCsvButton =  document.querySelector("#jsonToCsvButton")
const csvToJsonButton =  document.querySelector("#csvToJsonButton")

function jsonToCsv(json) {

    const headers = Object.keys(json[0])
    const csvRows = []

    csvRows.push(headers.join(','))
    for(const row of json) {
        const values = headers.map( (header) => {
            let value = row[header]
            
        if(value === null || value === undefined) {
            value = ""
        } else if(typeof value === "object") {
            value = JSON.stringify(value)
        }
            return value
        })
        csvRows.push(values.join(","))
    }
   
    return csvRows.join("\n")    
}

function csvToJson(csv) {
    const lines = csv.split("\n")
    const headers = lines[0].split(",")
    const json = []

    for(let i = 1; i < lines.length; i++) {
        const values = lines[i].split(",")
        const row = {}

        for(let j = 0; j < headers.length; j++) {
            let value = values[j]
            
            if(value[0] === "{" || value[0] === "[") {
                value = JSON.parse(value)
            } 
            row[headers[j]] = value
        }
        json.push(row)
    }
    
    return json
}

jsonToCsvButton.addEventListener('click', function() {
    const json = JSON.parse(converterInput.value.trim())

    const csv = jsonToCsv(json) 

    downloadCsv(csv)
})

csvToJsonButton.addEventListener("click" , function() {
    const csv = converterInput.value.trim()

    const json = csvToJson(csv)
    displayJson(json)     
    
})

function downloadCsv(csv) {
    const downloadLink = document.createElement("a")
    downloadLink.setAttribute("href", 
    "data:text/csv;charset=utf-8," + encodeURIComponent(csv))

    downloadLink.setAttribute("download", "data.csv")

    downloadLink.style.display = "none"

    document.body.appendChild(downloadLink)

    downloadLink.click()

    document.body.removeChild(downloadLink)
}

function displayJson(json) {
    const resultArea = document.createElement("pre")

    resultArea.textContent = JSON.stringify(json, "\n", 2)

    document.body.appendChild(resultArea)

    const copyBtn = document.createElement('button')
    copyBtn.id = 'copy'
    copyBtn.innerHTML = '<i class="ph-light ph-copy-simple"></i>'
    copyBtn.setAttribute('title', "Copiar")
    resultArea.appendChild(copyBtn)
    
    copyBtn.addEventListener('click', copyJson)
}

function copyJson() {
    const resultArea = document.querySelector('pre')
    const json = resultArea.textContent
    
    navigator.clipboard.writeText(json).then( 
        () => {        
        alert('Json copiado para a área de tranferencia.')
    }, (error) => {
        console.log('erro ao copiar JSON')
    })    
}


