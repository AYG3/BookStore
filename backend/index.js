import express, { response } from "express";
import { PORT, mongoDBURL } from './config.js';
import mongoose from "mongoose";
import { Book } from './models/bookModel.js'

const app = express(); //express is our backend framework

//Middleware for parsing request body
app.use(express.json())


app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("App is live")
})

// app.listen(PORT, () => {
//     console.log(`App is listening on PORT: ${PORT}`);
// });

//Route to creete and save new book 
app.post('/books', async (request, response) => { //use async cuz we aare working with mongoos library
    try {
        if(!request.body.title || !request.body.author || !request.body.publishYear){
            return response.status(400).send('Send all required fields: Title, Author, Publish year')
        }

        //Create's an object newBook with prroperties title ..., request.body typically contains data sent from the client side
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        }
        
        //creates new document in database and stores it in 'book'
        const book = await Book.create(newBook);
        return response.status(201).send(book);
        
    } catch (error) {
        consosle.log(error)
    }
})

//Route to get all books from database
app.get('/books', async (request, response) => {
    try {
        const books = await Book.find({})//passing empty object to find() to get list of all books from DB and save in books variable
        return response.status(200).json({  //returns data to the client
            count : books.length,
            data : books
        })

    } catch (error) {
        console.log(error.message)
        return response.status(500).send(error.message)
    }
});



//Route to get a single book from the database
app.get('/books/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const book = await Book.findById(id)
        return response.status(200).json(book)

    } catch (error) {
        console.log(error.message)
        return response.status(500).send(error.message)
    }
});

//Route to update a book
app.put('/books/:id', async (request, response) => {
    try {
        if(!request.body.title || !request.body.author || !request.body.publishYear){
            return response.status(400).send('Send all required fields: Title, Author, Publish year')
        }

        const  { id } = request.params
        const result = await Book.findByIdAndUpdate(id, request.body)

        if(!result){
            return response.status(404).json({ message : 'Boook not found'})
        }

        return response.status(200).send({ message: 'Book updated succesfully' })

    } catch (error) {
        console.log(error.message)
        return response.status(500).send(error.message)
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