const http = require("http");
const PORT = 80;

const server = http.createServer((req, res) => {
  res.end("Hello World - Projeto DevOps");
});

server.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
