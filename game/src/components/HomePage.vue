<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {getShips} from '../scripts/dbUtils'
import {} from 'vue-router';
import { RouterLink } from 'vue-router';
import router from '@/router';

const playerName: any = defineModel("playerName");
const playerShip: any = defineModel("playerShip");
const ships: any = ref<[]>([]);

onMounted(() => {
    getShips().then((data) => {
        ships.value = data;
    });
});

function onSubmit() {
    router.push({ path: 'game', query: {playerName: playerName.value, ship: playerShip.value}});
}

</script>

<template>
    <main class="homepage-size d-flex justify-content-center align-items-center">
        
        <div>
            <form class="">
                <div class="mb-3">
                    <label for="playerName" class="form-label">Nom du joueur</label>
                    <input class="form-control" type="text" v-model="playerName" name="playerName" id="playerName" placeholder="Nom du joueur">
                </div>
                <div class="mb-3">
                    <label for="ship" class="form-label">Vaisseau</label>
                    <select v-model="playerShip" class="form-select" name="ship" id="ship">
                        <option v-for="ship of ships">{{ ship.name }}</option>
                    </select>
                </div>
                <button class="btn btn-primary" type="submit" @click.stop.prevent="onSubmit">Submit</button>
            </form>
        </div>
    </main>
</template>

<style>
.homepage-size {
    height: 850px;
}
</style>