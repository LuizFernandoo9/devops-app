const http = require("http"); 
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello World - Projeto DevOps - teste de deploy");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Rodando na porta ${PORT}`);
});
