import db from './db';

export function createTables() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS progresso (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      data TEXT,
      pontos INTEGER
    );
  `);

  console.log("SQLite iniciado.");
}