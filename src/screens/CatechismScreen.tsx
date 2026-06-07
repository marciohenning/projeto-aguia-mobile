import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from '../components/Card';
import { Body, Subtitle, Title } from '../components/Text';
import { useApp } from '../services/AppContext';
import { colors } from '../styles/theme';

export function CatechismScreen() {
  const { state, setState } = useApp();
  const page = state.catePage || 0;
  const key = `lesson-${page + 1}`;
  const done = !!state.cateDone[key];

  function markDone() {
    if (done) return;
    setState(prev => ({
      ...prev,
      xp: prev.xp + 10,
      cateXP: prev.cateXP + 10,
      cateDone: { ...prev.cateDone, [key]: true }
    }));
  }

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Title>✝️ Catecismo Anual</Title>
        <Body>Lição {page + 1} de 52</Body>
        <Body>Progresso: {Object.keys(state.cateDone || {}).length}/52 sábados</Body>
      </Card>
      <Card>
        <Subtitle>Lição {page + 1}</Subtitle>
        <Body>Conteúdo do Catecismo será migrado progressivamente do PWA.</Body>
        <Body>Meta: ler, explicar e revisar em voz alta.</Body>
      </Card>
      <TouchableOpacity style={styles.button} onPress={markDone}>
        <Title style={styles.buttonText}>{done ? 'Lição concluída' : 'Concluir lição (+10 XP)'}</Title>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondary} onPress={() => setState(prev => ({ ...prev, catePage: Math.min(51, page + 1) }))}>
        <Body>Próxima lição</Body>
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
