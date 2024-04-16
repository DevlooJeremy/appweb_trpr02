<script setup lang="ts">

import { ref } from 'vue'
import Actions from "../components/Actions.vue";
import { PlayerActions } from "../scripts/gameUtils";
import Mission from "../components/Mission.vue";
import Ship from "../components/Ship.vue";
import Enemy from "../components/Enemy.vue";

const props = defineProps({
  playerName: String,
  shipName: String
})

const action = ref<PlayerActions>();

function update(recievedAction: PlayerActions){
    action.value = recievedAction;
}

</script>

<template>
    <div class="container">
        <div class="row my-4">
            <Actions class="col-6" @act="update"/>
            <Mission class="col-5"/>
        </div>
        <div class="row">
            <Ship class="col-5"/>
            <Enemy class="col-5"/>
        </div>
    </div>
</template>

<style>
</style>