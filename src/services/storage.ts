import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState } from '../types/app';
import { initialState } from '../data/defaultState';

const KEY = '@ProjetoAguiaV36/state';

export async function loadState(): Promise<AppState> {
  const raw = await AsyncStorage.getItem(KEY);
  if (!raw) return initialState;
  try {
    return { ...initialState, ...JSON.parse(raw), version: 36 };
  } catch {
    return initialState;
  }
}

export async function saveState(state: AppState): Promise<void> {
  await AsyncStorage.setItem(KEY, JSON.stringify(state));
}

export async function resetState(): Promise<void> {
  await AsyncStorage.removeItem(KEY);
}
