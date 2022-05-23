<script setup lang="ts">
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

import { Meal } from '@/models/mealsdb/types';

const props = defineProps<{
    meal: Meal
}>()

</script>

<template>
    <ion-content :fullscreen="true">
        <!-- 
            The meal image 
        -->
        <ion-img :src="meal.image" />

        <!-- 
            All other information about the meal are shown in a list.
            Don't remember why it's a list in a list.
            I was trying to make something sticky, but it didn't work.
        -->
        <ion-list>
            <ion-item-group>
                <ion-item-divider>
                    <!--- 
                        The meal title.
                    -->
                    <ion-list-header>
                        <h1>
                            {{ meal.title }}
                        </h1>
                    </ion-list-header>
                </ion-item-divider>
                <ion-list>
                    <!--- 
                        The meal General information.
                    -->
                    <ion-item-group>
                        <ion-item-divider color="primary" sticky>Information</ion-item-divider>
                        <!---
                            The meal area.
                        -->
                        <ion-item>
                            <ion-label>Area</ion-label>
                            <ion-note slot="end">{{ meal.area }}</ion-note>
                        </ion-item>
                        <!---
                            The meal tag.
                        -->
                        <ion-item v-if="meal.tags">
                            <ion-label>Tag</ion-label>
                            <ion-note slot="end">
                                {{ meal.tags }}
                            </ion-note>
                        </ion-item>
                        <!---
                            The meal category.
                        -->
                        <ion-item button detail="true" :router-link="`/category/${meal.category.name}`" router-direction="forward">
                            <ion-label>Category</ion-label>
                            <ion-note slot="end">{{ meal.category.name }}</ion-note>
                        </ion-item>
                        <!---
                            The meal source.
                            Sometimes the source is no longer available.
                        -->
                        <ion-item button v-if="meal.source" :href="meal.source.url" detail="true">
                            <ion-label>Source</ion-label>
                            <ion-note slot="end">{{ meal.source.host }}</ion-note>
                        </ion-item>
                        <!---
                            Link to the meal on youtube.
                        -->
                        <ion-item button v-if="meal.youtube" :href="meal.youtube" detail="true">
                            <ion-icon :icon="logoYoutube" slot="end"></ion-icon>
                            <ion-label>Video</ion-label>

                        </ion-item>
                    </ion-item-group>
                    <!---
                        The meal ingredients.
                    -->
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
                    <!---
                        The meal instructions.
                    -->
                    <ion-item-group>
                        <ion-item-divider color="primary" sticky>Instructions</ion-item-divider>
                        <div v-for="step in meal.instructions" class="ion-padding">
                            {{ step }}
                        </div>
                    </ion-item-group>
                </ion-list>
            </ion-item-group>
        </ion-list>
    </ion-content>
</template>