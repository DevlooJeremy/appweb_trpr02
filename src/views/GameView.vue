<script setup lang="ts">

import { ref } from 'vue'
import { PlayerActions, Ranks, actionToString, stringToAction } from "../scripts/gameUtils";
import Actions from "../components/Actions.vue";
import Mission from "../components/Mission.vue";
import Ship from "../components/Ship.vue";
import Enemy from "../components/Enemy.vue";

const props = defineProps({
  playerName: String,
  shipName: String
})

const action = ref<string>()
const playerRank = ref<Ranks>(Ranks.MASTER)
const enemyRank = ref<Ranks>()
const playerVitality = ref<number>(100)
const playerMaxVitality = ref<number>(100)
const enemyVitality = ref<number>(0)
const enemyMaxVitality = ref<number>(0)
const score = ref<number>(0)

function update(recievedAction: PlayerActions){
    switch (recievedAction) {
        case PlayerActions.FIGHT:
            fight()
            break;
    
        default:
            break;
    }
}

function fight() {
    let playerAttack: number = getRndNbr(0, 100)
    let enemyAttack: number = getRndNbr(0, 100)
    switch (playerRank.value) {
        case Ranks.BEGINER:
            if (playerAttack < 20) {
                damageEnemy()
            }
            break;
        case Ranks.CONFIRMED:
            if (playerAttack < 35) {
                damageEnemy()
            }
            break;
        case Ranks.EXPERT:
            if (playerAttack < 50) {
                damageEnemy()
            }
            break;
        case Ranks.MASTER:
            if (playerAttack < 70) {
                damageEnemy()
            }
            break;
    
        default:
            break;
    }

    switch (enemyRank.value) {
        case Ranks.BEGINER:
            if (enemyAttack < 20) {
                damagePlayer()
            }
            break;
        case Ranks.CONFIRMED:
            if (enemyAttack < 35) {
                damagePlayer()
            }
            break;
        case Ranks.EXPERT:
            if (enemyAttack < 50) {
                damagePlayer()
            }
            break;
        case Ranks.MASTER:
            if (enemyAttack < 70) {
                damagePlayer()
            }
            break;
    
        default:
            break;
    }
}

function getRndNbr(min:number, max:number): number {
    return Math.random() * (max - min) + min;
}

function damagePlayer() {
    playerVitality.value -= (getRndNbr(3,6) * playerMaxVitality.value) / 100
}

function damageEnemy() {
    enemyVitality.value -= (getRndNbr(3,6) * enemyMaxVitality.value) / 100
}

function retreat() {

}

function repair() {

}

function chooseEnemy() {

}

function reset() {
    action.value = "Wait"
}

</script>

<template>
    <div class="container">
        <div class="row my-4">
            <Actions class="col-6" @act="update"/>
            <Mission class="col-5"/>
        </div>
        <div class="row">
            <Ship :playerName="props.playerName" :shipName="props.shipName" class="col-5"/>
            <Enemy class="col-5" :act="action" @reset="reset"/>
        </div>
    </div>
</template>

<style>
</style>