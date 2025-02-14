const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const path = require("path");
const express = require("express");

const port = process.env.PORT || 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve statische bestanden correct
  server.use("/_next", express.static(path.join(__dirname, ".next")));

  // Catch-all handler voor alle Next.js pagina's
  server.all("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  // Start server op opgegeven poort (cPanel gebruikt dynamische poorten)
  server.listen(port, () => {
    console.log(`🚀 Server draait op http://localhost:${port}`);
  });
});
