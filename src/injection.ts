import type { App, InjectionKey } from 'vue'
import { MealsService } from './models/mealsdb/interface'
import { MealsDBService } from './services/mealdb/service'

export const MealsServiceKey = Symbol() as InjectionKey<MealsService>

export function ProvideInjection(app:App<Element>){
  app.provide(MealsServiceKey, MealsDBService.getInstance())
}