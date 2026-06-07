import React from 'react';
import { ScrollView } from 'react-native';
import { Card } from '../components/Card';
import { Body, Title } from '../components/Text';
import { useApp } from '../services/AppContext';

export function GradesScreen() {
  const { state } = useApp();
  return (
    <ScrollView style={{ padding: 12 }}>
      <Card>
        <Title>📄 Boletim</Title>
        {Object.entries(state.grades || {}).map(([s, arr]) => (
          <Body key={s}>{s}: {arr.join(' | ')}</Body>
        ))}
      </Card>
    </ScrollView>
  );
}
