import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
router.db.defaults({ history: [] }).write();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser || jsonServer.bodyParser);

const RESPONSES = [
  "Para consultar os dados, acesse o menu de consultas.",
  "Encontrei registros relacionados a esse tema em nossa base de acordos.",
];

function pickResponse() {
  const index = Math.floor(Math.random() * RESPONSES.length);
  return RESPONSES[index];
}

server.post("/chat", (req, res) => {
  const { message, session_id } = req.body || {};

  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({
      error: "O campo 'message' é obrigatório e não pode estar vazio.",
    });
  }

  const delay = 800 + Math.random() * 1000;

  setTimeout(() => {
    const responseText = pickResponse();
    const timestamp = new Date().toISOString();

    router.db
      .get("history")
      .push({
        session_id: session_id || "sem-sessao",
        message,
        response: responseText,
        timestamp,
      })
      .write();

    res.status(200).json({
      response: responseText,
      timestamp,
    });
  }, delay);
});

server.use(router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`porta do servidor: http://localhost:${PORT}`);
  console.log(`Endpoint do chat: POST http://localhost:${PORT}/chat`);
});