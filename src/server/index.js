import express from 'express';
import cors from 'cors';
import React from 'react';
import {renderToString} from 'react-dom/server';
import PhotoList from '../shared/photos/PhotoList';
import fetch from 'cross-fetch';
require('dotenv').config();

const app = express();


app.use(cors());

app.use(express.static("public"));

const key = process.env.REACT_APP_PEXEL_API_KEY;
console.log('API Key:', key)

app.get('*', (req, res, next) => {
    fetch(`https://api.pexels.com/v1/curated?per_page=10`, {
        headers: {
            Accpet: 'application/json',
            Authorization: key
        }
    })
    .then(response => response.json())
    .then(initialData => {
        console.log('markeup initialData:', initialData);
        const markup = renderToString(<PhotoList initialData={initialData}/>);
        res.send(`
            <!DOCTYPE html>
            <head>
                <title>Photo Curator</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <script src='/bundle.js' defer></script>
                <script>
                    window.__initialData__ = ${JSON.stringify(initialData)}
                    window.__key__ = '${key}'
                </script>
            </head>
            <body>
                <div id='root'>${markup}</div>
            </body>
            </html>
        `);
    })
    
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening')
})