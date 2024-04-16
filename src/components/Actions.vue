<script setup lang="ts">
import { PlayerActions } from "../scripts/gameUtils";

const emit = defineEmits<{
  (event: 'act', action: PlayerActions): void
}>()

function fight() {
    emit('act', PlayerActions.FIGHT)
}

function retreat() {
    emit('act', PlayerActions.RETREAT)
}

function repare() {
    emit('act', PlayerActions.REPARE)
}

</script>

<template>
    <div class="container text-white">
        <div class="bg-blue p-2 rounded-top">
            Actions
        </div>
        <div class="d-flex justify-content-between bg-dark p-4 rounded-bottom gap-4">
            <button type="button" class="btn btn-primary w-100 h-0" @click="fight">
                Combattre
            </button>
            <button type="button" class="btn btn-primary w-100 h-0" @click="retreat">
                Terminer la mission
            </button>
            <button type="button" class="btn btn-primary w-100 h-0" @click="repare">
                Terminer la mission et réparer le vaisseau
            </button>
        </div>
    </div>
    </template>

<style>
</style>