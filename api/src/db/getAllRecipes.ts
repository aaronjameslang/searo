import { getDb } from './getDb';


export function getAllRecipes() {
    return getDb().prepare(`SELECT * FROM recipes`).all();
}
