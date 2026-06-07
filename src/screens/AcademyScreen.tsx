import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card } from '../components/Card';
import { Body, Subtitle, Title } from '../components/Text';
import { questionBank, subjects, subjectIcons } from '../data/defaultState';
import { useApp } from '../services/AppContext';
import { colors } from '../styles/theme';

export function AcademyScreen() {
  const { state, setState } = useApp();
  const [subject, setSubject] = useState(state.selectedSubject || 'Matemática');
  const questions = questionBank[subject] || questionBank.Matemática;
  const [index, setIndex] = useState(0);
  const q = questions[index % questions.length];

  function answer(i: number) {
    const correct = i === q.answer;
    setState(prev => {
      const stats = prev.academyStats[subject] || { correct: 0, total: 0 };
      return {
        ...prev,
        xp: prev.xp + (correct ? 5 : 0),
        selectedSubject: subject,
        academyStats: {
          ...prev.academyStats,
          [subject]: { correct: stats.correct + (correct ? 1 : 0), total: stats.total + 1 }
        }
      };
    });
    setIndex(v => v + 1);
  }

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Title>🏛️ Academia</Title>
        <Body>Escolha livremente a disciplina para estudar.</Body>
      </Card>

      <View style={styles.subjects}>
        {subjects.map(s => (
          <TouchableOpacity key={s} style={[styles.subject, s === subject && styles.active]} onPress={() => setSubject(s)}>
            <Body>{subjectIcons[s] || '📚'} {s}</Body>
          </TouchableOpacity>
        ))}
      </View>

      <Card>
        <Subtitle>{subject}</Subtitle>
        <Title>{q.q}</Title>
        {q.options.map((op, i) => (
          <TouchableOpacity key={op} style={styles.answer} onPress={() => answer(i)}>
            <Body>{op}</Body>
          </TouchableOpacity>
        ))}
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 12 },
  subjects: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 10 },
  subject: { backgroundColor: '#fff', borderRadius: 16, padding: 10, borderWidth: 1, borderColor: colors.line },
  active: { borderColor: colors.accent, backgroundColor: '#dbeafe' },
  answer: { borderWidth: 1, borderColor: colors.line, borderRadius: 14, padding: 14, marginTop: 8 }
});
