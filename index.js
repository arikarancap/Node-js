const http = require('http');
const path = require('path');
const fs = require('fs');
const app = http.createServer((request, response) => {
    if (request.url === '/') {
        fs.readFile(path.join(`${__dirname}/Main/home.html`), 'utf8', (err, data) => {
            if (err) { throw err }
            response.end(data)

        })
    }
    if (request.url === '/Service') {
        fs.readFile(path.join(`${__dirname}/Main/service.html`), 'utf8', (err, data) => {
            if (err) { throw err }
            response.end(data)

        })
    }
    if (request.url === '/home') {

        response.writeHead(200, { 'Content-Type': 'application/json' })
        let x = [{ name: 'Arikaran', age: 25 }]
        response.end(JSON.stringify(x))
    }

})
let PORT = process.env.PORT || 2500;
app.listen(PORT, () => {
    console.log("Server Started...." + PORT)
})