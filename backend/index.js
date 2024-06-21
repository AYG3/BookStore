import express, { response } from "express";
import { PORT, mongoDBURL } from './config.js';
import mongoose from "mongoose";
import { Book } from './models/bookModel.js'
import booksRoute from './routes/booksRoute.js'

const app = express(); //express is our backend framework

//Middleware for parsing request body
app.use(express.json())


app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("App is live")
})

app.use('/books', booksRoute)

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