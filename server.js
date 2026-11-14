const http = require("http");
const add = require("./app");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  res.end(`Hello from AWS EC2! 2 + 3 = ${add(2, 3)}`);
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
