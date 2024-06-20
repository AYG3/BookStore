import express from "express";
import { PORT } from './config.js';

const app = express(); //express is our backend framework

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("App is live")
})

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});