<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const props = defineProps({
  playerName: String,
  shipName: String,
  vitality: Number,
  maxVitality: Number,
  score: Number
})

const vitalityValue = ref<number>(100)
const maxVitalityValue = ref<number>(100)

watch(props, () =>{
    vitalityValue.value = props.vitality??100
    maxVitalityValue.value = props.maxVitality??100
});

const vitalityPercentage = computed(() => (vitalityValue.value * 100) / maxVitalityValue.value)



</script>

<template>
    <div class="container text-white">
        <div class="bg-blue p-2 rounded-top">
            {{props.playerName??"Anonyme"}}
        </div>
        <div class="bg-dark p-4 rounded-bottom">
            <div>Maitre - {{ props.score }} CG</div>
            <div class="my-3">{{props.shipName??"Poubelle volante"}}</div>
            <div class="bg-blue text-center rounded">{{vitalityPercentage}}%</div>
        </div>
    </div>
    </template>

<style>
</style>