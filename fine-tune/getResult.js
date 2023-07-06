const openai = require('./configAPI');

async function getResult() {
    try {
        const response = await openai.listFineTunes();
        console.log(JSON.stringify(response.data.data));
    } catch (err) {
        console.log(err);
    }
}

getResult();