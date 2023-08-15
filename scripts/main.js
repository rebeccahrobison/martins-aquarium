import { getFish } from './database.js'
// Import the FishList function from the correct module
import { FishList, mostHolyFish, soldierFish, nonHolyFish } from './fish/FishList.js'
import { getTips } from './database.js'
import { TipList } from './tips/TipList.js'
import { LocationsList } from './locations/LocationsList.js'

const tips = getTips()
/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fish")


// parentHTMLElement.innerHTML = FishList()
parentHTMLElement.innerHTML = mostHolyFish() + soldierFish() + nonHolyFish()
//  + soldierFish() + nonHolyFish()

const asideParentHTMLElement = document.querySelector(".tips")
asideParentHTMLElement.innerHTML = TipList(tips)

const locationHTMLElement = document.querySelector(".locations")
locationHTMLElement.innerHTML = LocationsList()

// const allFish = getFish()

// for (const fish of allFish) {
//     console.log(fish)
// }