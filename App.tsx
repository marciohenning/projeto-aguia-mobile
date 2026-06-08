import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/AppNavigator';
import { AppProvider } from './src/services/AppContext';
import { useEffect } from 'react';
import { createTables } from './src/database/schema';

export default function App() {
  useEffect(() => {
  createTables();
  alert("SQLite V37 inicializado com sucesso!");
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