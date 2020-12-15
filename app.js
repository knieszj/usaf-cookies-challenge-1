const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.use(cookieParser())


app.get('/login', (req, res) => {
    if (req.query.username !== undefined){
        let cookieUserNameArray = Object.values(req.query)
        res.cookie('name', `${cookieUserNameArray[0]}`)
        res.status(200).json({message: `Logged in as: ${cookieUserNameArray[0]}`})
    }   else {
        res.status(404).json({message: `Something went wrong.  Please query with /?username=name`})
    }
})


const port = 3000
app.listen(port, () => console.log(`:==: Listening at port: ${port} :==:`))
