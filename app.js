const express = require("express");
const app = express();
const PORT = process.env.port || 8000;
const router = express.Router();
const path = require("path")
require("./models/user")
const mongoose = require("mongoose");
const SURVEYUSERS = mongoose.model("SURVEYUSERS");

const cors = require("cors");
app.use(cors());

require("./models/user")

// const cors = require("cors");
// require("./models/model")

app.use(express.json())
app.use(router);


mongoose.connect("mongodb+srv://as727243:ashish727244@cluster0.c3dhhno.mongodb.net/?retryWrites=true&w=majority")

mongoose.connection.on("connected",()=>
{
    console.log("databse connected");
})
mongoose.connection.on("error",()=>
{
    console.log("error connecting to database ");
})


router.post("/submit",(req,res)=>
{
    console.log(req.body)
    console.log(typeof(req.body.response))
    console.log("saving new user account")
    const user = new SURVEYUSERS(
        {
            username: req.body.username,
            email : req.body.email,
            response: req.body.response
            
        }
    )

    user.save()
    .then((data)=>{ console.log("account created"); res.json({message:"saves success"})}).catch(err =>{error: "error saving data"})



})





app.use(express.static(path.join(__dirname,"./survey/build")))
app.get("*",(req,res)=>
{
    res.sendFile(path.join(__dirname,"./survey/build/index.html"),function (err){res.status(500).send(err)})
})

app.listen(PORT,()=>
{
    console.log(`server started at + ${PORT}`)
})

