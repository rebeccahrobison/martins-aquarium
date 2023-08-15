const database = {
    fish: [
        {
            species: "Emperor Angelfish (Pomacanthus imperator) ",
            length: 10,
            name: "Brenda",
            location: "Indonesia",
            food: "crustaceans",
            image: "https://www.liveaquaria.com/images/categories/thumbs/th_67194_Emperor_Angelfisha.jpg"
        },
        {
            species: "Firefish (Nemateleotris magnifica)",
            length: 2,
            name: "Bart",
            location: "Sri Lanka",
            food: "crustaceans",
            image: "https://www.liveaquaria.com//images/categories/thumbs/th_71133_Firefish.jpg"
        },
        {
            species: "Sailfin Tang (Zebrasoma veliferum)",
            length: 14,
            name: "Vern",
            location: "Indonesia",
            food: "algae",
            image: "https://www.liveaquaria.com//images/categories/thumbs/th_24039_Sailfin_Tang.jpg"
        },
        {
            species: "Royal Gramma Basslet (Gramma loreto)",
            length: 3,
            name: "Wanda",
            location: "Caribbean",
            food: "crustaceans",
            image: "https://www.liveaquaria.com//images/categories/thumbs/th_72329_Royal_Gramma_Basslet.jpg"
        }
    ],
    tips: [
        {
            title: "How to Clean a Saltwater Tank",
            list: ["Remove 25% of the water", "Clean glass panes of the tank", "Vacuum the substrate", "Rinse the prefilter", "Add new salt water to the tank"]
        },
        {
            title: "Ways to Maintain Tank Temperature",
            list: ["Run an air conditioner", "Make sure no direct sunlight shines on the tank", "Install fan inside your tank hood", "Purchase a chiller"]
        },
        {
            title: "Ways to Maintain Tank Salinity",
            list: ["Top off for evaporation with fresh water only", "Match salinity when mixing new salt water", "Make one-to-one water changes", "Compensate for salt creep"]
        }
    ],
    locations: [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Indonesia_provinces_blank_map.svg/800px-Indonesia_provinces_blank_map.svg.png",
            place: "Indonesia"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Ceylan-map.png",
            place: "Sri Lanka"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Caribbean_general_map.png/1200px-Caribbean_general_map.png",
            place: "Caribbean"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}