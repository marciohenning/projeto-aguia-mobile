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

export type ProgressoDiario = {
  id: number;
  data: string;
  tarefasConcluidas: number;
  recompensa: number;
};

export function carregarProgressoDiario(data: string): ProgressoDiario | null {
  const resultado = db.getFirstSync(
    `SELECT * FROM progresso_diario WHERE data = ?`,
    [data]
  );

  return resultado as ProgressoDiario | null;
}