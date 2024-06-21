import express from "express";
import { PORT, mongoDBURL } from './config.js';
import mongoose from "mongoose";

const app = express(); //express is our backend framework

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("App is live")
})

// app.listen(PORT, () => {
//     console.log(`App is listening on PORT: ${PORT}`);
// });

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