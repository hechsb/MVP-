const express = require('express')
const app = express()
const port = 3000
const homesRoute =require('./routes/homes')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/home",homesRoute)

app.get("/",(req,res)=>{
    res.send("heeeeelo")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })