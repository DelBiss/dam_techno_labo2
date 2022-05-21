
<script setup lang="ts">

import { inject, ref, Ref } from 'vue';
import { MealsServiceKey } from "@/injection"
import { Filter } from '@/models/mealsdb/types';

import FilterView from '@/components/recipes/FilterView.vue';
import NavToolBar from '@/components/menu/NavToolBar.vue';


const mealsService = inject(MealsServiceKey)

const props = defineProps<{
    type: string
    query: string
}>()

const filters: Ref<Filter[] | null> = ref(null);

mealsService?.getMealsByCategory(props.query).then(
    (_filters: Filter[]) => {
        filters.value = _filters;
    }
)

</script>

<template>
    <NavToolBar :title="query">
        <FilterView v-if="filters" :filters="filters"></FilterView>
    </NavToolBar>
</template>