<script setup lang="ts">
import { defineProps } from 'vue'
import { 
    IonPage, 
    IonMenuButton,
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonBackButton, 
    IonContent, 
    useIonRouter
} from "@ionic/vue";

const IonRouter = useIonRouter();
const props = defineProps({
    action: {
        default: false
    },
    title: {
        required: true
    }
})

</script>

<template>
<ion-page>
    <ion-header >
        <ion-toolbar color="primary">
            <ion-buttons slot="start">
                <!-- 
                    If we can go back, the back button will be shown.
                    But if we can't go back, the menu button will be shown.
                    We don't want to show both at the same time because it looks too crowded.
                -->
                <ion-menu-button v-if="!IonRouter.canGoBack()"></ion-menu-button>
                <ion-back-button></ion-back-button>
            </ion-buttons>
            <ion-title>{{ title }} </ion-title>
            <ion-buttons slot="end" v-if="action">
                <slot name="action">action</slot>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <!-- 
        For the navbar to work, it needs to be placed inside the ion-page. 
        But our content also needs to be inside the ion-page.
        We use slot to place the content inside the ion-page.
    -->
    <slot></slot>
        
    
</ion-page>
</template>