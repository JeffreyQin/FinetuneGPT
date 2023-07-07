const promptField = document.getElementById('promptField');
const promptButton = document.getElementById('promptButton');
const clearButton = document.getElementById('clearButton');
const backButton = document.getElementById('backButton');
const botTitle = document.getElementById('botTitle');
const chatPanel = document.getElementById('chatPanel');
const bot = (new URLSearchParams(window.location.search)).get('bot');

document.addEventListener('DOMContentLoaded', () => {
    botTitle.innerHTML = bot;
});

promptButton.addEventListener('click', async () => {
    const userMsg = document.createElement('p');
    userMsg.innerHTML = `<b>You: </b>${promptField.value}`;
    chatPanel.appendChild(userMsg);

    const result = await fetch(`http://localhost:5000/generate?prompt=${promptField.value}&bot=${bot}`)
        .then(res => res.json())
        .then(res => res.message);

    const botMsg = document.createElement('p');
    botMsg.innerHTML = `<b>${bot}: </b>${result}`;
    chatPanel.appendChild(botMsg);
})

clearButton.addEventListener('click', () => {
    chatPanel.innerHTML = '';
})

backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
})