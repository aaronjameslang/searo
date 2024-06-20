import sqlite3 from 'better-sqlite3';

export function getDb() {
    const db = sqlite3('searo.db');

    db.exec(`
        CREATE TABLE IF NOT EXISTS recipes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            body TEXT
        );
    `)

    // Possibly pre-populate db if it's empty?

    return db
}
