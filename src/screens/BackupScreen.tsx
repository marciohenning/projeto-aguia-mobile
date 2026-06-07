import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from '../components/Card';
import { Body, Title } from '../components/Text';
import { useApp } from '../services/AppContext';
import { exportBackup, importBackup } from '../services/backup';
import { colors } from '../styles/theme';

export function BackupScreen() {
  const { state, setState } = useApp();
  const [last, setLast] = useState<string | null>(state.lastBackup || null);

  async function handleExport() {
    const uri = await exportBackup(state);
    setLast(uri);
    setState(prev => ({ ...prev, lastBackup: new Date().toISOString() }));
  }

  async function handleImport() {
    try {
      const payload = await importBackup();
      if (!payload) return;
      setState({ ...payload.state, version: 36 });
      Alert.alert('Backup importado', 'Os dados foram restaurados com sucesso.');
    } catch (e: any) {
      Alert.alert('Erro', e.message || 'Não foi possível importar o backup.');
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Title>💾 Backup</Title>
        <Body>Exporte ou importe dados do Projeto Águia. Compatível com backups JSON da V35, desde que contenham o campo state.</Body>
        <Body>Último backup: {last || 'ainda não exportado'}</Body>
      </Card>
      <TouchableOpacity style={styles.button} onPress={handleExport}>
        <Title style={styles.buttonText}>📤 Exportar Backup</Title>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondary} onPress={handleImport}>
        <Title>📥 Importar Backup</Title>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 12 },
  button: { backgroundColor: colors.accent, padding: 16, borderRadius: 18, alignItems: 'center', marginVertical: 10 },
  buttonText: { color: '#fff', fontSize: 18 },
  secondary: { backgroundColor: '#fff', padding: 16, borderRadius: 18, alignItems: 'center' }
});
