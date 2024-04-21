<script setup lang="ts">
import { watch, ref, computed } from 'vue';


const props = defineProps({
  act: String,
  vitality: Number,
  maxVitality: Number
})

const action = ref<string>();
const vitalityValue = ref<number>(100)
const maxVitalityValue = ref<number>(100)

const emit = defineEmits<{
  (event: 'reset'): void
}>()

watch(props, () =>{
  if(props.act == "Fight"){
    console.log("Acting")
    emit("reset")
  }
  if(props.act == "Retreat"){
    console.log("Retreating")
    emit("reset")
  }
  if(props.act == "Repare"){
    console.log("Reparing")
    emit("reset")
  }
  else if(props.act == "Wait") {
    console.log("Waiting")
  }
  vitalityValue.value = props.vitality??100
  maxVitalityValue.value = props.maxVitality??100
})

const vitalityPercentage = computed(() => (vitalityValue.value * 100) / maxVitalityValue.value)

</script>

<template>
    <div class="container text-white">
        <div class="bg-blue p-2 rounded-top">
            *Enemy Name*
        </div>
        <div class="bg-dark p-4 rounded-bottom">
            <div>Expert - *Nbr* CG</div>
            <div class="my-3">*Ship Name*</div>
            <div class="bg-blue text-center rounded">{{vitalityPercentage}}%</div>
        </div>
    </div>
    </template>

<style>
</style>