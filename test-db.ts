import "dotenv/config";
import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "RSVP",
  connectionLimit: 5,
});

async function main() {
  const conn = await pool.getConnection();
  console.log("✅ Koneksi berhasil!");
  conn.release();
  await pool.end();
}

main().catch(console.error);
