<script setup lang="ts">
import { Meal } from '@/models/mealsdb/types';
import {
    IonImg,
    IonList,
    IonItemGroup,
    IonListHeader,
    IonItem,
    IonLabel,
    IonNote,
    IonContent,
    IonAccordionGroup,
    IonIcon,
    IonItemDivider,
    IonHeader,
    IonToolbar,
    IonTitle,
} from '@ionic/vue';

import { logoYoutube } from 'ionicons/icons';
const props = defineProps<{
    meal: Meal
}>()

</script>

<template>
    <ion-content :fullscreen="true">
    
    
    <ion-img :src="meal.image"/>
    
    <ion-list>
        <ion-item-group>
            <ion-item-divider >
                <ion-list-header>

                    <h1>
                        {{ meal.title }}
                    </h1>

                </ion-list-header>
            </ion-item-divider>
            <ion-list>
                <ion-item-group>
                    <ion-item-divider color="primary" sticky>Information</ion-item-divider>
                    <ion-item>
                        <ion-label>Area</ion-label>
                        <ion-note slot="end">{{ meal.area }}</ion-note>
                    </ion-item>
                    <ion-item v-if="meal.tags">
                        <ion-label>Tag</ion-label>
                        <ion-note slot="end">
                            {{ meal.tags }}
                        </ion-note>
                    </ion-item>
                    <ion-item button detail="true" :router-link="`/category/${meal.category.name}`" router-direction="forward">
                        <ion-label>Category</ion-label>
                        <ion-note slot="end">{{ meal.category.name }}</ion-note>
                    </ion-item>
                    <ion-item button v-if="meal.source" :href="meal.source.url" detail="true">
                        <ion-label>Source</ion-label>
                        <ion-note slot="end">{{ meal.source.host }}</ion-note>
                    </ion-item>
                    <ion-item button v-if="meal.youtube" :href="meal.youtube" detail="true">
                        <ion-icon :icon="logoYoutube" slot="end"></ion-icon>
                        <ion-label>Video</ion-label>

                    </ion-item>
                </ion-item-group>
                <ion-item-group>
                    <ion-item-divider color="primary" sticky>Ingredients</ion-item-divider>
                    <ion-item v-for="ingredient in meal.ingredients">
                        <ion-label>
                            {{ ingredient.ingredient }}
                        </ion-label>
                        <ion-note slot="end">
                            {{ ingredient.measure }}
                        </ion-note>
                    </ion-item>
                </ion-item-group>
                <ion-item-group>
                    <ion-item-divider color="primary" sticky>Instructions</ion-item-divider>
                    <!-- <ion-item  > -->
                    <div v-for="step in meal.instructions" class="ion-padding">
                        {{ step }}
                    </div>
                    <!-- </ion-item> -->
                </ion-item-group>
            </ion-list>
        </ion-item-group>
    </ion-list>
    </ion-content>
</template>