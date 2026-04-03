import "dotenv/config";
import app from "./app.js";

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
