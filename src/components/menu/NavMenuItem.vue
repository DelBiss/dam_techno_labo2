<script lang="ts">
  
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const props = defineProps<{
        item: MenuItem,
    }>()
</script>

<template>
    
    <ion-item-group v-if="item.children">
        <ion-item-divider>
            {{ item.name }}
        </ion-item-divider>
        
        <NavMenuItem v-for="childItem in item.children" :key="childItem.name" :item="childItem" />
        
    </ion-item-group>
    
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
