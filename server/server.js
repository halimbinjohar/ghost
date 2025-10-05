import http from "node:http"

const server = http.createServer( (req, res) => {
    res.end("Hello World");
});

server.listen(8000, () => {
    console.log("Server is running on port 8000");
});
