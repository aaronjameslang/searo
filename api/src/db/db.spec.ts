import { getRecipes } from './getRecipes'
import { insertRecipe } from './insertRecipe'

describe('getRecipes', () => {
    it('returns exact title match', () => {
        const title = "Test Tajine #"+Math.random()
        const body = "Ingredients, etc"
        insertRecipe(title, body)
        const recipes = getRecipes(title)
        expect(recipes).toHaveLength(1)
        expect(recipes[0].title).toBe(title)
        expect(recipes[0].body).toBe(body)
    })
    it('returns no match, correctly', () => {
        const title = "Test Tajine #"+Math.random()
        const recipes = getRecipes(title)
        expect(recipes).toHaveLength(0)
    })
})
