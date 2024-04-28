<script setup lang="ts">

    const props = defineProps({
        message: String
    })

    const emit = defineEmits<{
        (event: 'read'): void
    }>()

    function confirm() {
        emit("read")
    }

</script>

<template>
    <div class="border border-dark pop-up center d-flex flex-column p-2">
        <div class="my-2 m-auto text-center">{{ props.message }}</div>
        <button class="m-2" @click="confirm">Compris</button>
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
    max-width: 20%;
}
</style>