<script setup lang="ts">

    const emit = defineEmits<{
        (event: 'redirect', action: boolean): void
    }>()

    function confirm() {
        emit("redirect", true)
    }
    
    function cancel() {
        emit("redirect", false)
        
    }

</script>

<template>
    <div class="border border-dark pop-up center d-flex flex-column m-2">
        <div class="m-2">Voulez-vous vraiment changer de page?</div>
        <div class="my-2 m-auto">(Votre partie sera perdu)</div>
        <button class="m-2" @click="confirm">Confirmer</button>
        <button class="m-2" @click="cancel">Annuler</button>
    </div>
</template>

<style>
.center {
    position: fixed;
    top: 35%;
    left: 40%;
}

.pop-up {
    background: #ddd;
}
</style>