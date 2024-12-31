import { DummyJSON, DummyJSONApi } from './dummyjson';

export interface RecipeApi extends DummyJSONApi {
    recipes: Recipe[];
}

export interface Recipe extends DummyJSON {
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}