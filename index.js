const express = require('express');
const app = express();
app.listen(5000, () => {
console.log(`Example app listening on port 5000!`);
});
app.get('/', (request, response) => {
    response.send(`Hello world!`);
});
app.get('/about', (request, response) => {
    response.sendFile(`${__profile}/profile.html`);
});
