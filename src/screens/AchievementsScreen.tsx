import React from 'react';
import { ScrollView } from 'react-native';
import { Card } from '../components/Card';
import { Body, Title } from '../components/Text';
import { useApp } from '../services/AppContext';

export function AchievementsScreen() {
  const { state } = useApp();
  const missions = Object.values(state.money || {}).filter(v => Number(v) > 0).length;
  const cate = Object.keys(state.cateDone || {}).length;
  const level = Math.min(6, Math.floor((state.xp || 0) / 50));
  const levels = ['Aspirante', 'Escudeiro', 'Estudioso', 'Discípulo', 'Águia Jovem', 'Guardião', 'Águia Imperial'];

  return (
    <ScrollView style={{ padding: 12 }}>
      <Card>
        <Title>🏅 Conquistas</Title>
        <Body>Missões aprovadas: {missions}</Body>
        <Body>Catecismo: {cate}/52</Body>
        <Body>XP: {state.xp}</Body>
      </Card>
      <Card>
        <Title>🗺️ Mapa da Jornada</Title>
        <Body>Nível atual: {level + 1}. {levels[level]}</Body>
      </Card>
    </ScrollView>
  );
}
