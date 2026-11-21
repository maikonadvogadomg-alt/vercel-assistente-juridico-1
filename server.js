const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Página inicial
app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Express App</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 2rem; background: #0d1117; color: #e6edf3; max-width: 700px; margin: 0 auto; }
    h1 { color: #58a6ff; }
    p { color: #8b949e; line-height: 1.6; }
    .btn { display: inline-block; background: #238636; color: #fff; padding: 0.5rem 1rem; border-radius: 6px; text-decoration: none; margin-top: 1rem; cursor: pointer; border: none; font-size: 1rem; }
    .btn:hover { background: #2ea043; }
    .output { background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 1rem; margin-top: 1rem; color: #79c0ff; min-height: 2rem; }
    code { background: #161b22; padding: 0.15em 0.4em; border-radius: 4px; color: #79c0ff; }
  </style>
</head>
<body>
  <h1>🚀 Express funcionando!</h1>
  <p>Servidor Express rodando. Edite <code>server.js</code> para adicionar rotas.</p>
  <button class="btn" onclick="testar()">Testar API</button>
  <div class="output" id="out">Clique no botão para testar a API...</div>
  <script>
    async function testar() {
      const r = await fetch('/api/hello');
      const d = await r.json();
      document.getElementById('out').textContent = JSON.stringify(d, null, 2);
    }
  </script>
</body>
</html>`);
});

// API de exemplo
app.get('/api/hello', (req, res) => {
  res.json({
    mensagem: 'Olá do servidor Express!',
    hora: new Date().toLocaleString('pt-BR'),
    status: 'ok'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express rodando em http://localhost:${PORT}`);
});
