<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  playerName: String,
  shipName: String,
  vitality: Number,
  maxVitality: Number,
  score: Number
})

const vitalityPercentage = computed(() => (Math.ceil((props.vitality??100) * 100) / (props.maxVitality??100)))

const width = computed(() => (vitalityPercentage.value + '%'))

</script>

<template>
    <div class="container text-white">
        <div class="bg-blue p-2 rounded-top">
            {{props.playerName??"Anonyme"}}
        </div>
        <div class="bg-dark p-4 rounded-bottom">
            <div>Maitre - {{ props.score }} CG</div>
            <div class="my-3">{{props.shipName??"Poubelle volante"}}</div>
            <div class="health-bar rounded">
                <p class="health-percent text-center">{{Math.ceil(vitalityPercentage)}}%</p>
                <div class="inner-bar bg-blue rounded" :style="{ width }"></div>
            </div>
        </div>
    </div>
    </template>

<style scoped>
.health-bar {
    background-color: #fff3;
    height: 30px;
}
.inner-bar {
    height: 30px;
    transition: width .5s linear;
}
.health-percent {
    height: 30px;
    width: 480px;
    position: absolute;
    margin: 0;
}
</style>