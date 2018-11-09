const Creature = require('../models/Creature')
const mongoose = require('./connections')

Creature.remove()
    .then(() => {
        const yoda = new Creature({
            name: 'Yoda',
            description: 'Short, green Jedi Master. Very wise, he is.',
            img: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiB1s_U68feAhVNuVMKHeByCnYQjRx6BAgBEAU&url=http%3A%2F%2Fstarwars.wikia.com%2Fwiki%2FYoda&psig=AOvVaw0xjxU6sK86Ta6CVr4LnglQ&ust=1541871100023798'
        })
        
        const luke = new Creature({
            name: 'Luke Skywalker',
            description: 'A young student of Yoda and the one who brought balance to the Force.',
            img: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjfo6297MfeAhVIq1MKHZiSDN0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dd7SAJ0gP6-w&psig=AOvVaw1BZsUbuTnqk8ch0d4PR2sg&ust=1541871275633223'
        })
        
        const rancor = new Creature({
            name: 'Rancor',
            description: 'Big, nasty, ferocious creature.',
            img: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwis8sTY7MfeAhWB6lMKHd1EBNEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.darkinkart.com%2Fproducts%2Francors-wrath-jeremy-saliba&psig=AOvVaw1ZT7wtK8RVUf_j9AJGear_&ust=1541871389974271'
        })
    })
    .then(() => Creature.save())



