<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps({
    Rankings: Object
})

const sortedRankings: Object = computed(() => {
    if (props.Rankings != undefined) {
        let rankings = props.Rankings;
        let swapped: boolean = true;
        while (swapped) {
            swapped = false;
            for (let index = 0; index < rankings.length - 1; index++) {
                if (rankings[index].score < rankings[index + 1].score) {
                    let temp: Object = rankings[index + 1];
                    rankings[index + 1] = rankings[index];
                    rankings[index] = temp;
                    swapped = true;
                }
            }
        }
        return rankings;
    }
})



</script>

<template>
    <main class="d-flex justify-content-center align-items-center main-height">
        <div class="overflow-auto border border-3 border-dark leaderboard-size">
            <ul class="list-group-item text-size">
                <li class="border-bottom border-2 border-dark d-flex" v-for="(ranking, index) of sortedRankings">
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