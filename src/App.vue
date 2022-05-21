<template>
  <ion-app>
    <ion-split-pane content-id="main-content" type="overlay">
      <nav-menu :items="menuItem" content-id="main-content">Mes Recettes
      </nav-menu>
      <ion-router-outlet id="main-content"/>
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
import { inject, ref, Ref } from 'vue';
import { 
  IonApp,
  IonRouterOutlet,
  IonSplitPane
  } from '@ionic/vue';
import NavMenu from './components/menu/NavMenu.vue';
import { MenuItem } from './components/menu/NavMenuItem.vue';
import { MealsServiceKey } from "@/injection"
import { Category } from './models/mealsdb/types';
import { home } from 'ionicons/icons';
const mealsService = inject(MealsServiceKey)

const menuItem: Ref<MenuItem[] | undefined> = ref(undefined);

menuItem.value = [{
  name: 'Home',
  url: '/',
  icon: home
}]

mealsService?.getCategories().then(
  (categories:Category[]):MenuItem => {
    return {
      name: 'Categories',
      children: categories.map(
      (category:Category):MenuItem => {
        return {
          name: category.name,
          url: `/category/${category.name}`,
          avatar: category.thumbnail,
          direction: 'forward'
        }
      }
    )
  }}
).then(
  (menuItems:MenuItem):void => {
    menuItem.value = menuItem.value?.concat(menuItems);
  }
)
   


</script>