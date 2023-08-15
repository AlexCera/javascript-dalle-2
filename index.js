const OPENAI_API_KEY = 'Here goes the key';
const btn = document.querySelector('#btn');
const input = document.querySelector('#prompt');
const image = document.querySelector('#img');

btn.addEventListener('click', async () => {
    if (!input.value || input.value === "" || input.value.length == 0) {
        alert("Please enter a prompt")
        return
    }

    btn.disabled = true;

    const result = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        body: JSON.stringify({
            prompt: input.value,
            n: 1,
            size: '1024x1024',
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
        }
    });

    const data = await result.json();
    image.src = data.data[0].url;
    btn.disabled = false;
})