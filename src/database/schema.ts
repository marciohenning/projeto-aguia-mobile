import db from './db';

export function createTables() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS progresso_diario (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      data TEXT NOT NULL UNIQUE,
      tarefasConcluidas INTEGER NOT NULL DEFAULT 0,
      recompensa INTEGER NOT NULL DEFAULT 0
    );
  `);

  console.log('Tabela progresso_diario pronta.');
}

