const exp = require('express')
const app = exp()

app.use(exp.json())

function genName() {
    let ns = '';
    let chas = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    while (ns.length != 10) {
        ns += chas[Math.floor(Math.random() * 62)]
    }
    return ns
}
let cache = []
app.get('/', (req, res) => {
    let generated = genName()
    cache.push(generated)
    console.log(cache)
    res.status(200).json({ food: generated })
})
const game2048 = require("./routes/2048")
app.use("/2048", game2048)
app.listen(3000);