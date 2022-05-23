<script lang="ts">
    // It looks like type definitions doen't work in vue script setup.
    // So we do it here.
    // Should have been done in the models folder.
  export type MenuItem = {
      name: string;
      icon?: string;
      avatar?: string;
      url?: string;
      children?: MenuItem[];
      direction?: 'forward' | 'back' | 'none';
  }
</script>
<script setup lang="ts">
    import { defineProps  } from 'vue'
    import { IonAvatar,IonThumbnail,IonItemGroup,IonItemDivider,IonImg,IonItem,IonIcon,IonLabel} from '@ionic/vue';

    const props = defineProps<{
        item: MenuItem,
    }>()
</script>

<template>
    
    <!-- 
        If the menu item has children, we will show them as a group with a header.
        Send the header and iterate over the children as new MenuItem.
    -->
    <ion-item-group v-if="item.children">
        <ion-item-divider>
            {{ item.name }}
        </ion-item-divider>
        
        <NavMenuItem v-for="childItem in item.children" :key="childItem.name" :item="childItem" />
        
    </ion-item-group>
    
    <!-- 
        If the menu item has no children, we will show it as a normal item.
        Menu Item direction is for the navigation.
        If it is set to forward, it will allow to come back.
        We always want to be able to go back to the home page.
    -->
    <ion-item v-else button :router-link="item.url" :router-direction="item.direction?item.direction:'none'">
        <ion-icon slot="start" :icon="item.icon"  v-if="item.icon" />
        <ion-thumbnail  slot="start" v-if="item.avatar">
                    <ion-img :src="item.avatar" />
        </ion-thumbnail >
        
        <ion-label>
            {{ item.name }}
        </ion-label>
    </ion-item>
    
    
</template>
