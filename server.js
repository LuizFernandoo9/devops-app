const http = require("http"); 
const PORT = 80;

const server = http.createServer((req, res) => {
  res.end("Hello World - Projeto DevOps - alteração");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Rodando na porta ${PORT}`);
});
