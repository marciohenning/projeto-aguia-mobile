import db from './db';

export function salvarProgressoDiario(
  data: string,
  tarefasConcluidas: number,
  recompensa: number
) {
  db.runSync(
    `INSERT OR REPLACE INTO progresso_diario
     (data, tarefasConcluidas, recompensa)
     VALUES (?, ?, ?)`,
    [data, tarefasConcluidas, recompensa]
  );
}

export function carregarProgressoDiario(data: string) {
  return db.getFirstSync(
    `SELECT * FROM progresso_diario WHERE data = ?`,
    [data]
  );
}