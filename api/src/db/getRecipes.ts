import { Recipe } from '../Recipe';
import { getDb } from './getDb';


export function getRecipes(term: string): Recipe[] {
    return getDb()
        .prepare(`SELECT * FROM recipes WHERE title LIKE ?`)
        .all('%' + term + '%') as Recipe[];
}
