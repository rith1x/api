const exp = require('express')
const router = exp.Router()
const db = require('firebase/database');
console.log(db)
const firebaseConfig = {
    apiKey: "AIzaSyCf62hxGhy2fgt0bFWtdPNKx5gjsfXh1pE",
    authDomain: "gamexapi.firebaseapp.com",
    databaseURL: "https://gamexapi-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gamexapi",
    storageBucket: "gamexapi.appspot.com",
    messagingSenderId: "790531770004",
    appId: "1:790531770004:web:90c2b4a49da92d007b1681"
};

let usedUsernames = [];

router.get('/', (req, res) => {

})
router.get('/get/name', (req, res) => {
    const prefixes = [
        "Ace", "Blaze", "Cyber", "Echo", "Flash", "Glitch", "Hyper", "Jade", "Killer", "Lunar",
        "Maverick", "Neo", "Nova", "Omega", "Phantom", "Quasar", "Rogue", "Shadow", "Titan", "Vortex",
        "Alpha", "Beta", "Gamma", "Delta", "Zeta", "Epsilon", "Fusion", "Quantum", "Pixel", "Turbo",
        "Ultra", "Solar", "Luminous", "Stellar", "Aero", "Blitz", "Crimson", "Dragon", "Emerald", "Frost",
        "Galaxy", "Inferno", "Jet", "Knight", "Laser", "Meteor", "Ninja", "Onyx", "Phoenix", "Raven",
        "Scorpion", "Thunder", "Voltage", "Warp", "Xeno", "Zenith", "Aurora", "Bolt", "Catalyst", "Dynamo",
        "Element", "Falcon", "Glacier", "Hawk", "Ignite", "Jolt", "Krypton", "Lumina", "Mystic", "Nebula",
        "Obsidian", "Pulse", "Quantum", "Radiant", "Starlight", "Tempest", "Valkyrie", "Wraith", "Zen", "Zephyr",
        "Axis", "Blaze", "Cobra", "Drake", "Eclipse", "Flare", "Gale", "Horizon", "Ion", "Jester",
        "Kodiak", "Lynx", "Mercury", "Nebula", "Orbit", "Pyro", "Quake", "Rogue", "Saber", "Talon"
    ]
    const suffixes = [
        "Warrior", "Rider", "Hunter", "Slayer", "Guardian", "Knight", "Samurai", "Ninja", "Assassin", "Ranger",
        "Sniper", "Scout", "Mage", "Wizard", "Sorcerer", "Warlock", "Druid", "Monk", "Paladin", "Barbarian",
        "Berserker", "Shaman", "Rogue", "Thief", "Bandit", "Pirate", "Viking", "Gladiator", "Spartan", "Champion",
        "Warlord", "Commander", "General", "Captain", "Sailor", "Pilot", "Navigator", "Explorer", "Adventurer", "Hero",
        "Legend", "Master", "Expert", "Pro", "Ace", "Virtuoso", "Specialist", "Agent", "Operative", "Enforcer",
        "Mercenary", "Bounty", "Hunter", "Infiltrator", "Spy", "Technician", "Engineer", "Scientist", "Doctor", "Healer",
        "Medic", "Surgeon", "Nurse", "Alchemist", "Chemist", "Biologist", "Physicist", "Mathematician", "Librarian", "Scholar",
        "Scribe", "Archivist", "Historian", "Cartographer", "Geographer", "Ecologist", "Astronomer", "Astrologer", "Astrophysicist", "Cosmologist",
        "Philosopher", "Theologian", "Cleric", "Priest", "Minister", "Chaplain", "Bishop", "Cardinal", "Pope", "Prophet",
        "Oracle", "Seer", "Mystic", "Sage", "Guru", "Yogi", "Shaman", "Medium", "Psychic", "Clairvoyant"
    ]

    let gamer = prefixes[Math.floor(Math.random() * prefixes.length)] + suffixes[Math.floor(Math.random() * suffixes.length)]
    while (usedUsernames.includes(gamer)) {
        gamer = prefixes[Math.floor(Math.random() * prefixes.length)] + suffixes[Math.floor(Math.random() * suffixes.length)]
    }
    res.send(gamer)
})
router.get('/get/details', (req, res) => {

})


router.get('/set/:id', (req, res) => {
    usedUsernames.push(req.params.id)
    res.json({ result: "Name updated succesfully" })
})
router.get('/get/:id', (req, res) => {

    res.json({ input: req.params.id })
})


router.get('/', (req, res) => {

})

module.exports = router

