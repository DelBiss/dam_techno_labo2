

<script setup lang="ts">
    import { defineProps  } from 'vue'
    import { IonMenu,IonList, IonMenuToggle,IonHeader,IonToolbar,IonTitle,IonContent} from '@ionic/vue';
    import NavMenuItem from '@/components/menu/NavMenuItem.vue';    
    import { MenuItem } from "@/components/menu/NavMenuItem.vue";
    

    interface MenuProps {
        items?: MenuItem[],
    }
    
    const props = defineProps<MenuProps>()

    
</script>

<template>
  <ion-menu >
    
    <ion-header>
      <ion-toolbar>
        <!-- <ion-menu-toggle> -->
         <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <!-- </ion-menu-toggle> -->
        <ion-title>
          <slot></slot>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content>
      <ion-list>
        <ion-menu-toggle>
          <NavMenuItem v-for="childItem in items" :key="childItem.name" :item="childItem" />
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

