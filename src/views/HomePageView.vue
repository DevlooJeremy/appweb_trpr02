<script setup lang="ts">

import {ref, onMounted} from 'vue'
import axios from 'axios'
import {getShips} from '../scripts/dbUtils'
import HomePage from '@/components/HomePage.vue';


const ships: any = ref<[]>([]);

onMounted(() => {
    getShips().then((data) => {
        ships.value = data;
    });
});


</script>

<template>
    <HomePage/>
</template>

<style>
</style>