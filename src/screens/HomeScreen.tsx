import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card } from '../components/Card';
import { Body, Subtitle, Title } from '../components/Text';
import { useApp } from '../services/AppContext';
import { colors } from '../styles/theme';
import {
  carregarProgressoDiario,
  listarHistoricoProgresso,
  ProgressoDiario
} from '../database/progressRepository';

export function HomeScreen({ navigation }: any) {
  const { state } = useApp();

  const [tarefasSQLite, setTarefasSQLite] = useState<number>(0);
  const [recompensaSQLite, setRecompensaSQLite] = useState<number>(0);
  const [historico, setHistorico] = useState<ProgressoDiario[]>([]);

  const cateDone = Object.keys(state.cateDone || {}).length;
  const missions = Object.values(state.money || {}).filter(v => Number(v) > 0).length;

  useEffect(() => {
    const hoje = new Date().toISOString().slice(0, 10);
const progresso = carregarProgressoDiario(hoje);

    if (progresso) {
      setTarefasSQLite(progresso.tarefasConcluidas);
      setRecompensaSQLite(progresso.recompensa);
    }

    const lista = listarHistoricoProgresso();
    setHistorico(lista);
  }, []);

  const shortcuts = [
    ['🎯', 'Missão', 'Ver tarefas de hoje', 'Missão'],
    ['✝️', 'Catecismo', 'Continuar leitura', 'Catecismo'],
    ['🏛️', 'Academia', 'Responder perguntas', 'Academia'],
    ['📅', 'Calendário', 'Planejamento anual', 'Mais'],
    ['🏅', 'Conquistas', 'Ver progresso', 'Mais']
  ];

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Title>🦅 Projeto Águia Mobile</Title>
        <Body>Cognoscere, amare et servire Deum.</Body>
      </Card>

      <View style={styles.grid}>
        {shortcuts.map(([icon, title, desc, route]) => (
          <TouchableOpacity
            key={title}
            style={styles.quick}
            onPress={() => navigation.navigate(route)}
          >
            <Title>{icon}</Title>
            <Subtitle>{title}</Subtitle>
            <Body>{desc}</Body>
          </TouchableOpacity>
        ))}
      </View>

      <Card>
        <Subtitle>Resumo</Subtitle>
        <Body>XP: {state.xp}</Body>
        <Body>Missões aprovadas: {missions}</Body>
        <Body>Catecismo: {cateDone}/52 sábados</Body>
      </Card>

      <Card>
        <Subtitle>SQLite V37</Subtitle>
        <Body>Tarefas salvas: {tarefasSQLite}</Body>
        <Body>Recompensa salva: R$ {recompensaSQLite}</Body>
      </Card>

      <Card>
        <Subtitle>📅 Histórico de Missões</Subtitle>
        {historico.length === 0 ? (
          <Body>Nenhuma missão salva ainda.</Body>
        ) : (
          historico.map(item => (
            <Body key={item.data}>
              {item.data} — {item.tarefasConcluidas} tarefas — R$ {item.recompensa}
            </Body>
          ))
        )}
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 12 },
  grid: { gap: 10 },
  quick: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#dbeafe'
  }
});