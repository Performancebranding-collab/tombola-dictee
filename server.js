const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3030;
const DIR = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.json': 'application/json',
  '.png':  'image/png',
  '.ico':  'image/x-icon',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(DIR, urlPath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log('\n🎰  Tombola Dictée — Serveur démarré\n');
  console.log(`   BO  (Back-Office)  →  http://localhost:${PORT}/`);
  console.log(`   FRONT (Projecteur) →  http://localhost:${PORT}/front.html`);
  console.log('\n   Ctrl+C pour arrêter\n');
});
