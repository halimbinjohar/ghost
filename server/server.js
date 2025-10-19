import http from "node:http"

const PORT = 5000;

const server = http.createServer( (req, res) => {

    const urlPath = req.url

    console.log(urlPath)

    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("<html><body><h1>Server.js: This server is running on port 8000 </h1></body></html>");


});

server.listen(PORT, () => {
    console.log("Server is running on port 8000");
});
 