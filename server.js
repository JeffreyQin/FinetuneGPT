const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 5000;

const bots = require('./bots.json');
const GPTGenerate = require('./openai/GPTGenerate');

app.get('/load', (req, res) => {
    const botlist = Object.keys(bots);
    res.json({ list: botlist });
});

app.get('/generate', async (req, res) => {
    const response = await GPTGenerate(req.query['prompt'], bots[req.query['bot']]);
    res.json({ message: response });
})
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})