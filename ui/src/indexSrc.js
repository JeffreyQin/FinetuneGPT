const botPanel = document.getElementById('botPanel');

document.addEventListener('DOMContentLoaded', async () => {
    const botlist = await fetch(`http://localhost:5000/load`)
        .then(res => res.json())
        .then(res => res.list);

    for (bot of botlist) {
        const botButton = document.createElement('button');
        botButton.innerHTML = bot;
        botPanel.appendChild(botButton);
        botButton.addEventListener('click', () => {
            window.location.href = `chat.html?bot=${botButton.innerHTML}`;
        });
    }
});

