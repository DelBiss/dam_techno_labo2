import { MealsService } from "@/models/mealsdb/interface";
import { Meal, Category, Filter, IngredientMeal } from "@/models/mealsdb/types";
import { CategoriesResponse , FiltersResponse, IngredientNo, MealResponse, MealsResponse } from "./types";

export class MealsDBService implements MealsService {
    async getMeal(id: string): Promise<Meal> {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        const response = await fetch(url)
        const data = await response.json() as MealsResponse
        console.log(data)
        return this.ConvertMealResponse(data.meals[0])
    }

    async randomMeal(): Promise<Meal> {
        const url = "https://www.themealdb.com/api/json/v1/1/random.php"
        const response = await fetch(url)
        const data = await response.json() as MealsResponse
        console.log(data)
        return this.ConvertMealResponse(data.meals[0])
        
    }
    async getCategories(): Promise<Category[]> {
        const url = "https://www.themealdb.com/api/json/v1/1/categories.php"
        const response = await fetch(url)
        const data = await response.json() as CategoriesResponse
        console.log(data)
        return data.categories.map((category) => {
            return {
                id: category.idCategory,
                name: category.strCategory,
                description: category.strCategoryDescription,
                thumbnail: category.strCategoryThumb
            }
        })
    }
    
    async getMealsByCategory(category: string): Promise<Filter[]> {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        
        const response = await fetch(url)
        const data = await response.json() as FiltersResponse
        console.log(data)
        return data.meals.map((filter) => {
            return {
                id: filter.idMeal,
                title: filter.strMeal,
                thumbnail: filter.strMealThumb
            }
        })
    }

    private ConvertMealResponse(response: MealResponse): Meal {
        
        const ingredientList:IngredientMeal[] = IngredientNo.filter((ingredientNo) => {
                const ingredient = response[`strIngredient${ingredientNo}`] 
                const measure = response[`strMeasure${ingredientNo}`] 
                return ingredient && measure
            }).map((ingredientNo) => {
                const ingredient = response[`strIngredient${ingredientNo}`] 
                const measure = response[`strMeasure${ingredientNo}`] 
                return {
                    ingredient: ingredient,
                    measure: measure
                }
        })

        return {
            id: response.idMeal,
            title: response.strMeal,
            category: {
                name: response.strCategory
            },
            area: response.strArea,
            instructions: response.strInstructions.split("\r\n").filter((instruction) => instruction !== ""),
            ingredients: ingredientList,
            image: response.strMealThumb,
            thumbnail: `${response.strMealThumb}/preview`,
            tags: response.strTags,
            youtube: response.strYoutube,
            source: response.strSource ? {
                url: response.strSource,
                host: (new URL(response.strSource)).host.split(".").filter((part) => part !== "www").join(".")
            } : undefined
        }
    }

    
    private static _instance: MealsDBService;
    

    public static getInstance(): MealsDBService {
        if (!MealsDBService._instance) {
            MealsDBService._instance = new MealsDBService();
        }
        return MealsDBService._instance;
    }

    

}