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
                <ion-menu-button v-if="!IonRouter.canGoBack()"></ion-menu-button>
                <ion-back-button></ion-back-button>
            </ion-buttons>
            <ion-title>{{ title }} </ion-title>
            <ion-buttons slot="end" v-if="action">
                <slot name="action">action</slot>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>

    
        
        <slot></slot>
        
    
</ion-page>
</template>