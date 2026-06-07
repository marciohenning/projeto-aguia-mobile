import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from '../components/Card';
import { Body, Title } from '../components/Text';
import { colors } from '../styles/theme';

export function MoreScreen({ navigation }: any) {
  const items = ['Calendário', 'Boletim', 'Conquistas', 'Responsável', 'Backup'];
  return (
    <ScrollView style={styles.container}>
      <Card><Title>☰ Mais</Title><Body>Áreas complementares do Projeto Águia.</Body></Card>
      {items.map(item => (
        <TouchableOpacity key={item} style={styles.item} onPress={() => navigation.navigate(item)}>
          <Title>{item}</Title>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 12 },
  item: { backgroundColor: '#fff', padding: 16, borderRadius: 18, marginVertical: 6 }
});
