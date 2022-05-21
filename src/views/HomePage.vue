<template>
  <nav-tool-bar title="Recipe of the moment" :action="true">
    <template v-slot:action>
      <ion-button @click="refreshData()" >
        <ion-icon :icon="refresh"></ion-icon>
      </ion-button>
    </template>
    <ion-toolbar color="secondary">
      <ion-title>{{meal?.title}}</ion-title>
    </ion-toolbar>
    <recipe-meal v-if="meal" :meal="meal" ></recipe-meal>
  </nav-tool-bar>
</template>

<script setup lang="ts">
import { IonIcon, IonButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { inject, ref, Ref } from 'vue';
import {MealsServiceKey} from "@/injection"
import RecipeMeal from '@/components/recipes/RecipeMeal.vue';
import { Meal } from '@/models/mealsdb/types';
import NavToolBar from '@/components/menu/NavToolBar.vue';
import { refresh } from 'ionicons/icons';

const mealsService = inject(MealsServiceKey)

const meal:Ref<Meal|null> = ref(null);


function refreshData() {
  console.log('refreshDate');
  mealsService?.randomMeal().then(
  (_meal:Meal) => {
    meal.value = _meal;
  }  
)
}
  

refreshData();


</script>

