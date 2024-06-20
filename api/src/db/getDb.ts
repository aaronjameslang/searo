import sqlite3 from 'better-sqlite3';
import { Recipe } from '../Recipe';

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

export function insertRecipe(title: string, body: string) {
    const stmt = getDb().prepare('INSERT INTO recipes (title, body) VALUES (?, ?)');
    stmt.run(title, body);
}

export function getRecipes(term: string): Recipe[] {
    return getDb()
      .prepare(`SELECT * FROM recipes WHERE title LIKE ?`)
      .all('%'+term+'%') as Recipe[];
}

export function getAllRecipes() {
    return getDb().prepare(`SELECT * FROM recipes`).all();
}
