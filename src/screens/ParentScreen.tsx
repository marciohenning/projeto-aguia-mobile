import React from 'react';
import { ScrollView } from 'react-native';
import { Card } from '../components/Card';
import { Body, Title } from '../components/Text';
import { useApp } from '../services/AppContext';

export function ParentScreen() {
  const { state } = useApp();
  return (
    <ScrollView style={{ padding: 12 }}>
      <Card>
        <Title>👨 Responsável</Title>
        <Body>XP: {state.xp}</Body>
        <Body>Missões aprovadas: {Object.values(state.money || {}).filter(v => Number(v) > 0).length}</Body>
        <Body>Catecismo: {Object.keys(state.cateDone || {}).length}/52</Body>
      </Card>
    </ScrollView>
  );
}
