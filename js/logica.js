let prompt = "¿Quién es Michael Jordan?";
fetch('/api/completion', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({prompt: prompt}),
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch((error) => {
    console.error('Error:', error);
});
