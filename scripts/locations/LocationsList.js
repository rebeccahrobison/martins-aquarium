import { getLocations } from '../database.js'

export const LocationsList = () => {
    const locations = getLocations()
    let htmlString = ''

    for (const location of locations) {
        htmlString += `<section class="location card">
            <img class="location__image" src="${location.image}">
            <div class="location__title">${location.place}</div>
            </section>
            `
    }
    return htmlString

    
}

