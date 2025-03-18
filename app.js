//pacchetti da importare
import express from "express";


//impostiamo express e la porta del server
const app = express();
import cors from 'cors';
const port = process.env.SERVER_PORT || 3000;

import movieRouter from './routes/movieRouter.js'

import setImagePath from './middlewares/imagePath.js';
//middleware cors 
app.use(
    cors({
        origin: process.env.FRONTEND_APP,
    })
);

//middleware per gestire asset statici
app.use(express.static('public'))

//middleware per gestire le informazioni del body
app.use(express.json())

//middleware per gestione delle immagini
app.use(setImagePath)

//Router movies
app.use('/movies', movieRouter)

//attivazione del server
app.listen(port, () => {
    console.log(`Server Movies in funzione sulla porta: ${port}`)
})