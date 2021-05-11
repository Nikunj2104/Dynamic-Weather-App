const express = require("express")
const app = express()
const port = 5000
const hbs = require("hbs")

const path = require("path")
// console.log(path.join(__dirname, "../public"))
const staticPath = path.join(__dirname, "../public")
const partialspath = path.join(__dirname, "../partials")

app.set("view engine", "hbs")
app.use(express.static(staticPath))
hbs.registerPartials(partialspath)

app.get("/", (req,res)=>{
    res.render("index")
})

app.get("/weather", (req,res)=>{
    res.render("weather")
})
app.get("/weather/*", (req,res)=>{
    res.render("404error", {
        errorMsg: "Weather page not found"
    })
})

app.get("*", (req,res)=>{
    res.render("404error", {
        errorMsg: "Page not found"
    })
})

app.listen(port, ()=>{
    console.log(`listning at ${port}`)
})