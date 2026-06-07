import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as DocumentPicker from 'expo-document-picker';
import { AppState, BackupPayload } from '../types/app';

export function buildBackup(state: AppState): BackupPayload {
  return {
    app: 'Projeto Águia Mobile',
    version: 36,
    exportedAt: new Date().toISOString(),
    state,
    meta: {
      xp: state.xp,
      catechismDone: Object.keys(state.cateDone || {}).length,
      missionsApproved: Object.values(state.money || {}).filter(v => Number(v) > 0).length
    }
  };
}

export async function exportBackup(state: AppState): Promise<string> {
  const payload = buildBackup(state);
  const date = new Date().toISOString().slice(0, 10);
  const uri = `${FileSystem.documentDirectory}Projeto_Aguia_Mobile_Backup_V36_${date}.json`;
  await FileSystem.writeAsStringAsync(uri, JSON.stringify(payload, null, 2));
  if (await Sharing.isAvailableAsync()) {
    await Sharing.shareAsync(uri);
  }
  return uri;
}

export async function importBackup(): Promise<BackupPayload | null> {
  const result = await DocumentPicker.getDocumentAsync({ type: 'application/json', copyToCacheDirectory: true });
  if (result.canceled) return null;
  const file = result.assets[0];
  const text = await FileSystem.readAsStringAsync(file.uri);
  const payload = JSON.parse(text);
  if (!payload.state) {
    throw new Error('Backup inválido: campo state ausente.');
  }
  return payload;
}
