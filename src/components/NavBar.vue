<script setup lang="ts">
import router from '@/router';
import RedirectionConfirmation from "./RedirectionConfirmation.vue";
import { ref } from 'vue';

    const popUpVisible = ref<boolean>(false)
    let destination: string

    function goTohome() {
        destination = "/"
        if (router.currentRoute.value.name == "game") {
            popUpVisible.value = true
        }
        else {
            redirect(true)
        }
    }
    
    function goToScore() {
        destination = "/score"
        if (router.currentRoute.value.name == "game") {
            popUpVisible.value = true
        }
        else {
            redirect(true)
        }
    }

    function redirect(confirmation:boolean) {
        if (confirmation) {
            router.push({path:destination})
        }
        popUpVisible.value = false
    }

</script>

<template>
    <div class="flex-grow-1">
        <button name="homeButton" class="w-100 button-color size" @click="goTohome">Accueil</button>
    </div>

    <div class="flex-grow-1">
        <button name="scoreButton" class="w-100 button-color size" @click="goToScore">Classement</button>
    </div>

    <RedirectionConfirmation v-if="popUpVisible" @redirect="redirect" />
</template>

<style>
.button-color {
    background-color: grey;
}

.size {
    font-size: 30px;
}
</style>