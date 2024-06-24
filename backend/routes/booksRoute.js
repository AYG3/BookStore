import express from 'express'
import { Book } from '../models/bookModel.js'

const router = express.Router();


// Route to create and save new book 
// router.post('/books', async (request, response) => { // --- '/books' are redundant so we removed them - they are handles in index.js by the middleware
router.post('/', async (request, response) => { //use async cuz we aare working with mongoos library
    try {
        if(!request.body.title || !request.body.author || !request.body.publishYear){
            return response.status(400).send('Send - all fields are required: Title, Author, Publish year')
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

// Route to get all books from database
router.get('/', async (request, response) => {
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

// Route to get a single book from the database
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const book = await Book.findById(id)
        return response.status(200).json(book)

    } catch (error) {
        console.log(error.message)
        // return response.status(500).send({message : error.message})
        return response.status(500).send("Didn't see your link friend :(")
    }
});

// Route to update a book
router.put('/:id', async (request, response) => {
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

// Route to delete a book
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        
        const result = await Book.findByIdAndDelete(id)

        if (!result){
            return response.status(404).send('Book not deleted, prollly invalid id :(')
        }

        return response.status(200).json({message: 'Book deleted sucessfully'})
    } catch (error) {
        console.log(error.message)
        return response.status(500).send({ message: error.message })
    }
})

export default router;