import { Category, Filter, Meal } from "./types";

export interface MealsService {
    getMeal(id:Meal["id"]): Promise<Meal>;
    randomMeal(): Promise<Meal>;
    getCategories(): Promise<Category[]>;
    getMealsByCategory(category:Category["name"]): Promise<Filter[]>;
}