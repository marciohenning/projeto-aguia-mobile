import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/AppNavigator';
import { AppProvider } from './src/services/AppContext';
import { useEffect } from 'react';
import { createTables } from './src/database/schema';
import { salvarProgressoDiario } from './src/database/progressRepository';

export default function App() {
 useEffect(() => {
  createTables();

  salvarProgressoDiario(
    '2026-06-07',
    5,
    50
  );

  alert('Progresso salvo no SQLite!');
}, []);

  return (
    <AppProvider>
      <NavigationContainer>
        <AppNavigator />
        <StatusBar style="light" />
      </NavigationContainer>
    </AppProvider>
  );
}