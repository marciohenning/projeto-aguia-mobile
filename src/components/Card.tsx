import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors, shadow } from '../styles/theme';

export function Card({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 22,
    padding: 16,
    marginVertical: 8,
    ...shadow
  }
});
