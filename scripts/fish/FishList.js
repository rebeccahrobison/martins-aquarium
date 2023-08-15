// Import the function that returns a copy of the fish array
import { getFish } from '../database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish card">
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.length}in</div>
            <div class="fish__location">Location: ${fish.location}</div>
            <div class="fish__diet">Diet: ${fish.food}</div>
            
        </section>
        <div><img  class="fish__image image--card" src="${fish.image}" /></div>
`
    }
    htmlString += `</article>`

    return htmlString
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFishes = []
    const fishes = getFish ()
    for (const fish of fishes) {
        if (fish.length % 3 === 0) {
            holyFishes.push(fish)
        }
    }
    // return holyFish
    let htmlString = '<article class="fishList">'
    for (const holyFish of holyFishes) {
        htmlString += `<section class="fish card">
            
            <div class="fish__name"><b>Name: </b>${holyFish.name}</div>
            <div class="fish__species"><b>Species: </b>${holyFish.species}</div>
            <div class="fish__length"><b>Length: </b>${holyFish.length}</div>
            <div class="fish__location"><b>Location: </b>${holyFish.location}</div>
            <div class="fish__diet"><b>Diet: </b>${holyFish.food}</div>
        </section>
        <div><img class="fish__image image--card" src="${holyFish.image}" /></div>
`
    }
    htmlString += `</article>`

    return htmlString
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    const fishes = getFish()
    for (const fish of fishes)  {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }
    // return soldiers
    let htmlString = '<article class="fishList">'
    for (const soldier of soldiers) {
        htmlString += `<section class="fish card">
            
            <div class="fish__name"><b>Name: </b>${soldier.name}</div>
            <div class="fish__species"><b>Species: </b>${soldier.species}</div>
            <div class="fish__length"><b>Length: </b>${soldier.length}</div>
            <div class="fish__location"><b>Location: </b>${soldier.location}</div>
            <div class="fish__diet"><b>Diet: </b>${soldier.food}</div>
            
        </section>
        <div><img class="fish__image image--card" src="${soldier.image}" /></div>
`
    }
    htmlString += `</article>`

    return htmlString
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFishes = []
    const fishes = getFish()
    for (const fish of fishes) {
        if (!(fish.length % 3 === 0) && !(fish.length % 5 === 0)) {
            regularFishes.push(fish)
        }
    }
    // return regularFish
    let htmlString = '<article class="fishList">'
    for (const regularFish of regularFishes) {
        htmlString += `<section class="fish card">
            
            <div class="fish__name"><b>Name: </b>${regularFish.name}</div>
            <div class="fish__species"><b>Species: </b>${regularFish.species}</div>
            <div class="fish__length"><b>Length: </b>${regularFish.length}</div>
            <div class="fish__location"><b>Location: </b>${regularFish.location}</div>
            <div class="fish__diet"><b>Diet: </b>${regularFish.food}</div>
        </section>
        <div><img class="fish__image image--card" src="${regularFish.image}" /></div>
`
    }
    htmlString += `</article>`

    return htmlString
}