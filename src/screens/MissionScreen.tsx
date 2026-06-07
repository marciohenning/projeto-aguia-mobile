import React from 'react';
import { ScrollView, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Card } from '../components/Card';
import { Body, Subtitle, Title } from '../components/Text';
import { useApp } from '../services/AppContext';
import { colors } from '../styles/theme';

const tasks = [
  ['Português', 'Interpretação e gramática'],
  ['Matemática', 'Exercícios de revisão'],
  ['Catecismo', 'Leitura ou revisão curta']
];

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export function MissionScreen() {
  const { state, setState } = useApp();
  const key = todayKey();
  const done = tasks.filter((_, i) => state.checked[`${key}-${i}`]).length;
  const complete = done === tasks.length;
  const approved = Number(state.money[key] || 0) > 0;

  function toggle(i: number) {
    const id = `${key}-${i}`;
    setState(prev => ({ ...prev, checked: { ...prev.checked, [id]: !prev.checked[id] } }));
  }

  function approve() {
    if (!complete || approved) return;
    setState(prev => ({
      ...prev,
      xp: prev.xp + 10,
      money: { ...prev.money, [key]: 10 }
    }));
  }

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Title>🎯 Missão do Dia</Title>
        <Body>{done}/{tasks.length} tarefas concluídas</Body>
      </Card>
      {tasks.map((task, i) => (
        <Card key={task[0]}>
          <Subtitle>{task[0]}</Subtitle>
          <Body>{task[1]}</Body>
          <Switch value={!!state.checked[`${key}-${i}`]} onValueChange={() => toggle(i)} />
        </Card>
      ))}
      <TouchableOpacity style={[styles.button, (!complete || approved) && styles.disabled]} onPress={approve}>
        <Title style={styles.buttonText}>{approved ? 'Missão aprovada' : 'Aprovar missão (+10 XP)'}</Title>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 12 },
  button: { backgroundColor: colors.accent, padding: 16, borderRadius: 18, alignItems: 'center', marginVertical: 10 },
  disabled: { opacity: 0.5 },
  buttonText: { color: '#fff', fontSize: 18 }
});
