<script setup lang="ts">
import {RouterView} from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
    <header class="border-bottom border-3 border-dark">
        <div class="d-flex h-50">
            <NavBar/>
        </div>
    </header>
    <main>
        
        <RouterView/>
    </main>

</template>

<style scoped>

</style>
