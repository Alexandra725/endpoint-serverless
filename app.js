const express = require('express');
const superagent = require('superagent');

const app = express();

app.get('/', async (req, res) => {
    try { 
       const {text} = await superagent.get('https://api.exchangeratesapi.io/latest')
    const finalText = JSON.parse(text);
    res.status(200).send(finalText);
    } catch(err) {
        throw new Error;
    }
});


const port = 3000
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});