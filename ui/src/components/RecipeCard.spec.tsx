import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RecipeCard, RecipeCardList } from './RecipeCard';

describe('RecipeCard', () => {
  it('renders the recipe title and body', () => {
    const recipe = { title: 'Test Recipe', body: 'Test Body' };
    render(<RecipeCard recipe={recipe} />);

    expect(screen.getByText('Test Recipe')).toBeInTheDocument();
    expect(screen.getByText('Test Body')).toBeInTheDocument();
  });
});

describe('RecipeCardList', () => {
  it('renders a list of recipe cards', () => {
    const recipes = [
      { title: 'Test Recipe 1', body: 'Test Body 1' },
      { title: 'Test Recipe 2', body: 'Test Body 2' },
    ];
    render(<RecipeCardList recipes={recipes} />);

    expect(screen.getByText('Test Recipe 1')).toBeInTheDocument();
    expect(screen.getByText('Test Body 1')).toBeInTheDocument();
    expect(screen.getByText('Test Recipe 2')).toBeInTheDocument();
    expect(screen.getByText('Test Body 2')).toBeInTheDocument();
  });
});
