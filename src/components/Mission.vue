<script setup lang="ts">

const props = defineProps({
  currentMission:Number
})

</script>

<template>
    <div class="container text-white">
        <div class="bg-blue p-2 rounded-top">
            Mission en cours
        </div>
        <div class="d-flex flex-column bg-dark p-4 rounded-bottom">
            <div class="mb-3">{{ props.currentMission }}/5</div>
            <div>Objectif: survivre à 5 missions en obtenant le plus de crédits</div>
        </div>
    </div>
    </template>

<style>
</style>