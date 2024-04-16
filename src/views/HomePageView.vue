<script setup lang="ts">

import {ref, onMounted} from 'vue'
import axios from 'axios'
import {getShips} from '../scripts/dbUtils'


const ships: any = ref<[]>([]);

onMounted(() => {
    getShips().then((data) => {
        ships.value = data;
    });
});

</script>

<template>

</template>

<style>
</style>