<script setup lang="ts">

const props = defineProps({
    Rankings: Object
})

</script>

<template>
    <main class="d-flex justify-content-center align-items-center main-height">
        <div class="overflow-auto border border-3 border-dark leaderboard-size">
            <ul class="list-group-item text-size">
                <li class="border-bottom border-2 border-dark d-flex" v-for="(ranking, index) of Rankings">
                    <div class="">
                        {{ index + 1 + "•"}}
                    </div>
                    <div>
                        {{ ranking.name + " - " + ranking.score + " CG"}}
                    </div>
                </li>
            </ul>
        </div>
    </main>
</template>

<style>
.text-size {
    font-size: 20px;
}

.leaderboard-size {
    height: 500px;
    width: 1200px;
}
.main-height {
    height: 850px;
}
</style>