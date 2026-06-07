import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { AppState } from '../types/app';
import { initialState } from '../data/defaultState';
import { loadState, saveState } from './storage';

type AppContextValue = {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
  updateState: (patch: Partial<AppState>) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(initialState);

  useEffect(() => {
    loadState().then(setState);
  }, []);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const value = useMemo(() => ({
    state,
    setState,
    updateState: (patch: Partial<AppState>) => setState(prev => ({ ...prev, ...patch }))
  }), [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const value = useContext(AppContext);
  if (!value) throw new Error('useApp deve ser usado dentro de AppProvider');
  return value;
}
