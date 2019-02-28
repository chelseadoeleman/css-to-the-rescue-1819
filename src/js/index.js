const root = document.documentElement
const url = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/90e50f9ccbfeb39737bdb4f2d1175e2d/52.370216,4.895168'

;(async() => { 
    try {
        const response = await fetch(url)
        const data = await response.json()
        const wind = {
            "wind-direction": data.currently.windBearing
        }

        root.style.setProperty('--wind-jelly-rotation', wind["wind-direction"] + "deg")
        root.style.setProperty('--wind-rotation', ((wind["wind-direction"] / 100) * 5 ) + "deg")
        console.log(wind)
  
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }

})()
