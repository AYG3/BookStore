import express from "express";
import { PORT, mongoDBURL } from './config.js';
import mongoose from "mongoose";
import { Book } from './models/bookModel.js'

const app = express(); //express is our backend framework

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("App is live")
})

// app.listen(PORT, () => {
//     console.log(`App is listening on PORT: ${PORT}`);
// });

//Route to creete and save new book 
app.post('route/', async (request, response) => { //use async cuz we aare working with mongoos library
    try {
        if(!request.body.title || request.body.author || request.body.publishYear){
            return response.status(400).send('Send all required fields: Title, Author, Publish year')
        }
        
    } catch (error) {
        
    }
})
//Conect to database
mongoose.connect(mongoDBURL)
.then(() => {
    console.log('App is conected to database')

    //To ensure app only runs when conected to database
    app.listen(PORT, () => {
        console.log(`App is listening on PORT: ${PORT}`);
    });
})
.catch((error) => {
    console.log(error)
})