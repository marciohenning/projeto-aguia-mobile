import React from 'react';
import { Text as RNText, StyleSheet, TextProps } from 'react-native';
import { colors } from '../styles/theme';

export function Title(props: TextProps) {
  return <RNText {...props} style={[styles.title, props.style]} />;
}
export function Subtitle(props: TextProps) {
  return <RNText {...props} style={[styles.subtitle, props.style]} />;
}
export function Body(props: TextProps) {
  return <RNText {...props} style={[styles.body, props.style]} />;
}

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: '900', color: colors.blue, marginBottom: 6 },
  subtitle: { fontSize: 16, fontWeight: '700', color: colors.blue },
  body: { fontSize: 15, color: '#102033', lineHeight: 22 }
});
