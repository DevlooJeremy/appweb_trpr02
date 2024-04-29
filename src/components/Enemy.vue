<script setup lang="ts">
import { computed } from 'vue';
import { getRankWithExperience } from '@/scripts/gameUtils';


const props = defineProps({
  name: String,
  shipName: String,
  rank: Number,
  score: Number,
  vitality: Number,
  maxVitality: Number,
})

const vitalityPercentage = computed(() => ((props.vitality??100) * 100) / (props.maxVitality??100))

const width = computed(() => (vitalityPercentage.value + '%'))

</script>

<template>
    <div class="container text-white">
        <div class="bg-blue p-2 rounded-top">
            {{props.name}}
        </div>
        <div class="bg-dark p-4 rounded-bottom">
            <div>{{getRankWithExperience(props.rank??1)}} - {{props.score}} CG</div>
            <div class="my-3">{{props.shipName}}</div>
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