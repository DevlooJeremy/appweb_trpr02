<script setup lang="ts">

import { ref } from 'vue'
import { PlayerActions } from "../scripts/gameUtils";
import Actions from "../components/Actions.vue";
import Mission from "../components/Mission.vue";
import Ship from "../components/Ship.vue";
import Enemy from "../components/Enemy.vue";
import { getCharacters } from '@/scripts/dbUtils';
import router from '@/router';

const currentMission = ref<number>(1)

//Statistiques du joueur:
const playerName = ref<string>("Anonyme")
const playerShip = ref<string>("Poubelle volante")
const playerRank = ref<number>(4)
const playerScore = ref<number>(0)
const playerVitality = ref<number>(100)
const playerMaxVitality = ref<number>(100)

//Statistiques de l'ennemie:
const enemyName = ref<string>("NavXD")
const enemyShip = ref<string>("Vaisseau")
const enemyRank = ref<number>(1)
const enemyScore = ref<number>(0)
const enemyVitality = ref<number>(100)
const enemyMaxVitality = ref<number>(100)

let enemyIsAlive: boolean;

if (router.currentRoute.value.query.playerName != null) {
    playerName.value = router.currentRoute.value.query.playerName as string
}
if (router.currentRoute.value.query.ship != null) {
    playerShip.value = router.currentRoute.value.query.ship as string
}

chooseEnemy()

function update(recievedAction: PlayerActions){
    switch (recievedAction) {
        case PlayerActions.FIGHT:
            if (enemyIsAlive)
                fight()
            break;
        case PlayerActions.RETREAT:
            retreat()
            break;
        case PlayerActions.REPARE:
            repair()
            break;
    
        default:
            break;
    }
}

function fight() {
    let playerAttack: number = getRndNbr(0, 100)
    let enemyAttack: number = getRndNbr(0, 100)
    switch (playerRank.value) {
        case 1:
            if (playerAttack < 20) {
                damageEnemy()
            }
            break;
        case 2:
            if (playerAttack < 35) {
                damageEnemy()
            }
            break;
        case 3:
            if (playerAttack < 50) {
                damageEnemy()
            }
            break;
        case 4:
            if (playerAttack < 70) {
                damageEnemy()
            }
            break;
    
        default:
            break;
    }

    switch (enemyRank.value) {
        case 1:
            if (enemyAttack < 20) {
                damagePlayer()
            }
            break;
        case 2:
            if (enemyAttack < 35) {
                damagePlayer()
            }
            break;
        case 3:
            if (enemyAttack < 50) {
                damagePlayer()
            }
            break;
        case 4:
            if (enemyAttack < 70) {
                damagePlayer()
            }
            break;
    
        default:
            break;
    }

    if (playerVitality.value <= 0) {
        finishAndLoose()
    }
    else if (enemyVitality.value <= 0) {
        enemyIsAlive = false
        playerScore.value += enemyScore.value
        if (currentMission.value == 5) {
            finishAndWin()
        }
    }
}

function getRndNbr(min:number, max:number): number {
    return Math.random() * (max - min) + min;
}

function damagePlayer() {
    playerVitality.value -= (getRndNbr(3,6) * playerMaxVitality.value) / 100
    if(playerVitality.value < 0)
    playerVitality.value = 0
}

function damageEnemy() {
    enemyVitality.value -= (getRndNbr(3,6) * enemyMaxVitality.value) / 100
    if(enemyVitality.value < 0)
        enemyVitality.value = 0
}

function retreat() {
    changeMission()
}

function repair() {
    while (playerScore.value >= 5) {
        playerVitality.value += (1*playerMaxVitality.value)/100
        playerScore.value -= 5
    }
    changeMission()
}

function changeMission(){
    currentMission.value++
    chooseEnemy()
}

function chooseEnemy() {
    getCharacters().then(function (response){
        let nbrOfEnemy:number = response.length
        let chosenEnemy:number = Math.floor(getRndNbr(0, nbrOfEnemy))
        enemyName.value = response[chosenEnemy].name
        enemyShip.value = response[chosenEnemy].ship.name
        enemyRank.value = response[chosenEnemy].experience
        enemyScore.value = response[chosenEnemy].credit
        enemyVitality.value = response[chosenEnemy].ship.vitality
        enemyMaxVitality.value = enemyVitality.value
    })
    enemyIsAlive = true
}

function finishAndWin(){

}

function finishAndLoose(){

}

</script>

<template>
    <div class="container">
        <div class="row my-4">
            <Actions class="col-6" @act="update"/>
            <Mission :currentMission="currentMission" class="col-5"/>
        </div>
        <div class="row">
            <Ship :playerName="playerName" :shipName="playerShip" :vitality="playerVitality" :maxVitality="playerMaxVitality" :score="playerScore" class="col-5"/>
            <Enemy class="col-5" :name="enemyName" :shipName="enemyShip" :rank="enemyRank" :score="enemyScore" :vitality="enemyVitality" :maxVitality="enemyMaxVitality"/>
        </div>
    </div>
</template>

<style>
</style>