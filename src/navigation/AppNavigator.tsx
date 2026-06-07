import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../styles/theme';
import { HomeScreen } from '../screens/HomeScreen';
import { MissionScreen } from '../screens/MissionScreen';
import { AcademyScreen } from '../screens/AcademyScreen';
import { CatechismScreen } from '../screens/CatechismScreen';
import { MoreScreen } from '../screens/MoreScreen';
import { CalendarScreen } from '../screens/CalendarScreen';
import { GradesScreen } from '../screens/GradesScreen';
import { AchievementsScreen } from '../screens/AchievementsScreen';
import { ParentScreen } from '../screens/ParentScreen';
import { BackupScreen } from '../screens/BackupScreen';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MoreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.blue }, headerTintColor: '#fff' }}>
      <Stack.Screen name="Mais" component={MoreScreen} />
      <Stack.Screen name="Calendário" component={CalendarScreen} />
      <Stack.Screen name="Boletim" component={GradesScreen} />
      <Stack.Screen name="Conquistas" component={AchievementsScreen} />
      <Stack.Screen name="Responsável" component={ParentScreen} />
      <Stack.Screen name="Backup" component={BackupScreen} />
    </Stack.Navigator>
  );
}

export function AppNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.blue },
        headerTintColor: '#fff',
        tabBarActiveTintColor: colors.accent,
        tabBarLabelStyle: { fontWeight: '700' }
      }}
    >
      <Tabs.Screen name="Início" component={HomeScreen} />
      <Tabs.Screen name="Missão" component={MissionScreen} />
      <Tabs.Screen name="Academia" component={AcademyScreen} />
      <Tabs.Screen name="Catecismo" component={CatechismScreen} />
      <Tabs.Screen name="Mais" component={MoreStack} options={{ headerShown: false }} />
    </Tabs.Navigator>
  );
}
