<script setup lang="ts">
import Actions from "../components/Actions.vue";
import Mission from "../components/Mission.vue";
import Ship from "../components/Ship.vue";
import Enemy from "../components/Enemy.vue";
</script>

<template>
    <div class="container">
        <div class="row my-4">
            <Actions class="col-6"/>
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