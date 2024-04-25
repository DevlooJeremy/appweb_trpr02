<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  playerName: String,
  shipName: String,
  vitality: Number,
  maxVitality: Number,
  score: Number
})

const vitalityPercentage = computed(() => ((props.vitality??100) * 100) / (props.maxVitality??100))

</script>

<template>
    <div class="container text-white">
        <div class="bg-blue p-2 rounded-top">
            {{props.playerName??"Anonyme"}}
        </div>
        <div class="bg-dark p-4 rounded-bottom">
            <div>Maitre - {{ props.score }} CG</div>
            <div class="my-3">{{props.shipName??"Poubelle volante"}}</div>
            <div class="bg-blue text-center rounded">{{Math.ceil(vitalityPercentage)}}%</div>
        </div>
    </div>
    </template>

<style>
</style>