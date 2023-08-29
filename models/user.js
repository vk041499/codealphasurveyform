const mongoose = require("mongoose");
// const {ObjectId} = mongoose.Schema.Types;

const surveyuserSchema = new mongoose.Schema(
    {
         username :
         {
            type: String,
            required: true
         } ,
    
         email:
         {
            type:String,
            required: true
         },
         response: 
        {
         type:[String]
        }
            // default: undefined
         

    }

)

mongoose.model("SURVEYUSERS", surveyuserSchema)