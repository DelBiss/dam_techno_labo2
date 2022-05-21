<template>
  
      <nav-tool-bar :title="meal? meal.title : 'Recipe'">
      
        <recipe-meal v-if="meal" :meal="meal" ></recipe-meal>
        
      </nav-tool-bar>
    
</template>

<script setup lang="ts">
import {IonLoading, IonContent,IonButtons, IonBackButton,IonIcon, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/vue';
import { inject, ref, Ref } from 'vue';
import {MealsServiceKey} from "@/injection"
import RecipeMeal from '@/components/recipes/RecipeMeal.vue';
import { Meal } from '@/models/mealsdb/types';
import { menu } from 'ionicons/icons';
import NavToolBar from '@/components/menu/NavToolBar.vue';
const mealsService = inject(MealsServiceKey)

const meal:Ref<Meal|null> = ref(null);
const ionR = useIonRouter();
const props = defineProps<{
    id: string
}>()

mealsService?.getMeal(props.id).then(
  (_meal:Meal) => {
    meal.value = _meal;
  }
)  


</script>

