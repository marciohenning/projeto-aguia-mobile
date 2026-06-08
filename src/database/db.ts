import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('projetoaguia.db');

export default db;