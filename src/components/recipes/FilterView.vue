<script setup lang="ts">
import { Filter } from '@/models/mealsdb/types';
import { 
    IonImg, 
    IonList, 
    IonItemGroup, 
    IonListHeader, 
    IonItem, 
    IonLabel, 
    IonNote, 
    IonAccordion, 
    IonAccordionGroup,
    
    IonItemDivider,
    IonThumbnail,
    IonContent
    } from '@ionic/vue';

import { logoYoutube } from 'ionicons/icons';
const props = defineProps<{
    filters: Filter[]
}>()

</script>

<template>
    <ion-content :fullscreen="true">
    <ion-list>
            <ion-item v-for="item in filters" button :router-link="`/recipe/${item.id}`" router-direction="forward">
                <ion-thumbnail slot="start">
                    <ion-img :src="item.thumbnail" />
                </ion-thumbnail>
                <ion-label>
                    {{ item.title }}
                </ion-label>
            </ion-item>
        
    </ion-list>
    </ion-content>
</template>