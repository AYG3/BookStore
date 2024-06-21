import mongoose from "mongoose"

//General schema

//FYI - Id is not added cuz its handled automatically by Database
const bookSchema = mongoose.Schema(
    //object
    {
        //the object's options
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true, //to get created_at and last update time
    }
);


const Book = mongoose.model('Book', bookSchema)