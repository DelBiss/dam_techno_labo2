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
  // Ionic imports
  import { 
    IonApp,
    IonRouterOutlet,
    IonSplitPane
    } from '@ionic/vue';

  // Service Injections imports
  import { inject, ref, Ref } from 'vue';
  import { MealsServiceKey } from "@/injection"

  
  // Menu Component imports
  import NavMenu from './components/menu/NavMenu.vue';
  import { MenuItem } from './components/menu/NavMenuItem.vue';
  import { Category } from './models/mealsdb/types';
  import { home } from 'ionicons/icons';


  // Service Injections
  const mealsService = inject(MealsServiceKey)

  // Populate the menu items
  const menuItem: Ref<MenuItem[] | undefined> = ref(undefined);
  menuItem.value = [{
    name: 'Home',
    url: '/',
    icon: home
  }]

  // Ask the service for the categories
  mealsService?.getCategories().then(
    // Format the categories into menu items under the categories section
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
    // Update the menu state
    (menuItems:MenuItem):void => {
      menuItem.value = menuItem.value?.concat(menuItems);
    }
  )
    


</script>