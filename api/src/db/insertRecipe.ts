import { getDb } from './getDb';


export function insertRecipe(title: string, body: string) {
    const stmt = getDb().prepare('INSERT INTO recipes (title, body) VALUES (?, ?)');
    stmt.run(title, body);
}
