import express, { response } from "express";
import { PORT, mongoDBURL } from './config.js';
import mongoose from "mongoose";
import { Book } from './models/bookModel.js'
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express(); //express is our backend framework

//Middleware for parsing request body
app.use(express.json())

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("App is now live")
})


//Middleware for CORS Policy
//Option 1 Allow all origin of defult cors(*)
app.use(cors())
//Option 2 Allow custom Origins
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }
// ))

//Middleware for books actions
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