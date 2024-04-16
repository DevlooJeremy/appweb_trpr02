<script setup lang="ts">
    import {RouterLink} from 'vue-router'

    function goToGame() {
    }
</script>

<template>
    <RouterLink class="flex-grow-1" to="/">
        <button class="w-100 button-color size">Accueil</button>
    </RouterLink>

    <RouterLink class="flex-grow-1" to="/game">
        <button class="w-100 button-color size">Game</button>
    </RouterLink>

    <RouterLink class="flex-grow-1" to="/score">
        <button class="w-100 button-color size">Classement</button>
    </RouterLink>
</template>

<style>
.button-color {
    background-color: gray;
}

.size {
    font-size: 30px;
}
</style>