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

</script>

<template>
    <div class="container text-white">
        <div class="bg-blue p-2 rounded-top">
            {{props.name}}
        </div>
        <div class="bg-dark p-4 rounded-bottom">
            <div>{{getRankWithExperience(props.rank??1)}} - {{props.score}} CG</div>
            <div class="my-3">{{props.shipName}}</div>
            <div class="bg-blue text-center rounded">{{Math.ceil(vitalityPercentage)}}%</div>
        </div>
    </div>
    </template>

<style>
</style>