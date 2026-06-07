import { AppState } from '../types/app';

export const subjects = [
  'Português',
  'Matemática',
  'Ciências',
  'História',
  'Geografia',
  'Inglês',
  'Latim',
  'Catecismo',
  'Arte',
  'Ed. Financeira',
  'Projeto'
];

export const subjectIcons: Record<string, string> = {
  Português: '📝',
  Matemática: '🧮',
  Ciências: '🔬',
  História: '🏛️',
  Geografia: '🌎',
  Inglês: '🇺🇸',
  Latim: '🏛️',
  Catecismo: '✝️',
  Arte: '🎨',
  'Ed. Financeira': '💰',
  Projeto: '💡'
};

export const defaultGrades = {
  Português: [0, 0, 0, 0],
  Matemática: [0, 0, 0, 0],
  Ciências: [0, 0, 0, 0],
  História: [0, 0, 0, 0],
  Geografia: [0, 0, 0, 0],
  Inglês: [0, 0, 0, 0],
  Arte: [0, 0, 0, 0],
  Projeto: [0, 0, 0, 0]
};

export const initialState: AppState = {
  version: 36,
  xp: 0,
  checked: {},
  money: {},
  cateDone: {},
  catePage: 0,
  cateXP: 0,
  cateFavorites: [],
  academyStats: {},
  grades: defaultGrades,
  selectedSubject: null,
  journeyIndex: 0,
  lastBackup: null
};

export const questionBank: Record<string, { q: string; options: string[]; answer: number; explanation: string }[]> = {
  Matemática: [
    { q: '15% de 200 é:', options: ['15', '20', '30', '50'], answer: 2, explanation: '15% = 0,15; 0,15 × 200 = 30.' },
    { q: 'Se x + 7 = 20, então x é:', options: ['7', '13', '20', '27'], answer: 1, explanation: 'x = 20 - 7 = 13.' }
  ],
  Português: [
    { q: 'Interpretar um texto é:', options: ['Copiar', 'Compreender o sentido', 'Apagar'], answer: 1, explanation: 'Interpretar é compreender.' }
  ],
  Catecismo: [
    { q: 'Qual é a finalidade do homem?', options: ['Conhecer, amar e servir a Deus', 'Ser famoso', 'Ganhar dinheiro apenas'], answer: 0, explanation: 'O fim do homem é conhecer, amar e servir a Deus.' }
  ],
  Inglês: [
    { q: 'Book significa:', options: ['Mesa', 'Livro', 'Casa'], answer: 1, explanation: 'Book = livro.' }
  ]
};
