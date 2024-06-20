import { DUMMY_RECIPES } from '../Recipe';
import { getDb } from './getDb';
import { insertRecipe } from './insertRecipe';

export function resetDb() {
    const db = getDb();
    db.exec('DELETE FROM recipes');
    db.exec('VACUUM');
    DUMMY_RECIPES.forEach(recipe => {
        insertRecipe(recipe.title, recipe.body);
    });
}

if (require.main === module) {
    resetDb();
    console.log('Database reset');
}
