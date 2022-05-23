<template>
    
  <nav-tool-bar title="Recipe of the moment" :action="true">
    <!--
      For the home page, we show a random recipe
      and we want to be able to load a new one.
      So we add a button to the nav bar.
     -->
    <template v-slot:action>
      <ion-button @click="refreshData()" >
        <ion-icon :icon="refresh"></ion-icon>
      </ion-button>
    </template>
    <!--
      For the home page, we want a title that say why we are showing this recipe.
      But we also want to show the name of the recipe at all times.
      So we add a secondary toolbar with name of the recipe that will stick to the top.
    -->
    <ion-toolbar color="secondary">
      <ion-title>{{meal?.title}}</ion-title>
    </ion-toolbar>
    <!-- 
      Show the recipe. Wait to get the meal data from the API before showing it.
    -->
    <recipe-meal v-if="meal" :meal="meal" ></recipe-meal>
  </nav-tool-bar>
</template>

<script setup lang="ts">

// Ionic imports
import { IonIcon, IonButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

// Service Injections imports
import { inject, ref, Ref } from 'vue';
import {MealsServiceKey} from "@/injection"

// Meal Component imports
import RecipeMeal from '@/components/recipes/RecipeMeal.vue';
import { Meal } from '@/models/mealsdb/types';

// Toolbar Component imports
import NavToolBar from '@/components/menu/NavToolBar.vue';
import { refresh } from 'ionicons/icons';

const mealsService = inject(MealsServiceKey)

const meal:Ref<Meal|null> = ref(null);


function refreshData() {
  mealsService?.randomMeal().then(
  (_meal:Meal) => {
    meal.value = _meal;
  }  
)
}
  

refreshData();


</script>

