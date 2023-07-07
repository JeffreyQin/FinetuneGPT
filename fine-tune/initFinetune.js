const openai = require('./configAPI');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function uploadFile() {
    try {
        const response = await openai.createFile(
            fs.createReadStream(path.join(__dirname, `datasets/${process.env.CURRENT_FINETUNE_FILE}`)),
            "fine-tune"
        );
        console.log(response.data.id);
        return response.data.id;
    } catch (err) {
        console.log(err);
    }
}

async function initFinetune() {
    try {
        const response = await openai.createFineTune({
            training_file: await uploadFile(),
            model: 'davinci'
        });
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

initFinetune();