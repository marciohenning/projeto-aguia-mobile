import React from 'react';
import { ScrollView } from 'react-native';
import { Card } from '../components/Card';
import { Body, Title } from '../components/Text';

export function CalendarScreen() {
  return (
    <ScrollView style={{ padding: 12 }}>
      <Card>
        <Title>📅 Calendário</Title>
        <Body>Calendário anual será migrado progressivamente do PWA.</Body>
        <Body>Referências: disciplinas do dia, conteúdos, exercícios e Catecismo aos sábados.</Body>
      </Card>
    </ScrollView>
  );
}
