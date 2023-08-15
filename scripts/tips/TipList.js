import { getTips } from '../database.js'

const tips = getTips()


export const TipList = (tips) => {
    
    let htmlString = '<article class="tipList">'

    for (const tip of tips) {
        
        htmlString += `<section class="tip card">
            <div class="tip__title">${tip.title}</div>
            `
        for (const item of tip.list) {
            htmlString += `<div class="tip__list">${item}</div>
            `
        }
        htmlString += `</section>
        `
    }
    htmlString += `</article>`
    // console.log(htmlString)
    return htmlString
}

