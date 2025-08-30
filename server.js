import express from "express";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, "public");

app.disable("x-powered-by");
app.use(compression());
app.use(express.static(publicDir, { maxAge: "1h", index: "index.html" }));

app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`UNIWAY FAQ running on http://localhost:${port}`);
});
