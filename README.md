# 🦅 Projeto Águia Mobile — Versão 36

## Visão Geral

A **Versão 36** inicia a migração do Projeto Águia para **React Native com Expo**.

Esta versão não substitui o PWA imediatamente. Ela cria a primeira base mobile nativa para Android e iOS, preparada para receber os módulos do Projeto Águia progressivamente.

---

## Tecnologias

- React Native
- Expo
- TypeScript
- React Navigation
- AsyncStorage
- Expo FileSystem
- Expo Document Picker
- Expo Sharing

---

## Telas disponíveis

- 🦅 Início
- 🎯 Missão
- 🏛 Academia
- ✝️ Catecismo
- ☰ Mais
  - Calendário
  - Boletim
  - Conquistas
  - Responsável
  - Backup

---

## Recursos da V36

- Navegação mobile com abas inferiores;
- Estado global do aplicativo;
- Salvamento local com AsyncStorage;
- Missão do Dia com aprovação e XP;
- Academia básica com perguntas;
- Catecismo inicial com 52 lições;
- Conquistas e Mapa da Jornada;
- Importação e exportação de backup JSON;
- Estrutura preparada para migrar dados da V35 PWA.

---

## Instalação

```bash
npm install
npx expo start
```

Depois, abra com:

- Expo Go no Android;
- Expo Go no iPhone;
- emulador Android;
- simulador iOS.

---

## Comandos úteis

```bash
npm run start
npm run android
npm run ios
npm run web
```

---

## Migração PWA → Mobile

A V35 do PWA exporta backup JSON.

A V36 Mobile permite importar esse backup na tela:

```text
Mais → Backup → Importar Backup
```

---

## Próximas versões

### V37

- SQLite completo;
- tabelas para missões, academia, catecismo e boletim.

### V38

- câmera;
- OCR do boletim.

### V39

- notificações de estudo;
- lembretes do Catecismo aos sábados.

### V40

- preparação para publicação Android/iOS.

---

## Lema

> **Cognoscere, amare et servire Deum.**

**Conhecer, amar e servir a Deus.**
