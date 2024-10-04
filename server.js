import { createServer } from "node:http";
import { createReadStream } from "node:fs";

createServer((req, res) => {
  const indexHtml = createReadStream("./index-strict.html");

  res.writeHead(200, {
    "Content-Type": "application/xhtml+xml; charset=utf-8",
  });

  indexHtml.pipe(res);
}).listen(8000);
