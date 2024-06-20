import { Recipe } from '../Recipe';
import { getDb } from './getDb';


export function getRecipes(term: string): Recipe[] {
    const param = '%' + term + '%';
    return getDb()
        .prepare(`SELECT * FROM recipes WHERE title LIKE ? OR body LIKE ?`)
        .all(param, param) as Recipe[];
}
