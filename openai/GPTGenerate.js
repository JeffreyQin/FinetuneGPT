const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

module.exports = async (prompt, bot) => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createCompletion({
        model: bot,
        prompt: prompt,
        max_tokens: 1000
    });

    return completion.data.choices[0].text;
}
