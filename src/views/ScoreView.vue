<script setup lang="ts">
import Score from '../components/Score.vue'
import { onMounted, ref } from 'vue'
import { getRankings } from '../scripts/dbUtils'
const rankings: any = ref<[]>([])

onMounted(() => {
    getRankings().then((data)=> {
        rankings.value = data;
    });
});

</script>

<template>
    <Score :Rankings="rankings"/>
</template>

<style>
</style>