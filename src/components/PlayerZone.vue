<template>
    <div class="player-zone">
        <div v-if="playing">
            <div v-for="rowsIndex in distribution.rows" :key="rowsIndex">
                <coin :class="{ 'ml-2': colsIndex !== 1}" v-for="colsIndex in distribution.cols" :key="colsIndex"></coin>
            </div>
        </div>
        <div v-else>
            <p>
                Esperando turno...
            </p>
        </div>
        <p class="text-center">
            Jugador {{id}}
        </p>
    </div>
</template>

<script>
    import Coin from "./Coin";
    const coinsDistribution = {
        20: {
            rows: 5,
            cols: 4,
        },
        60: {
            rows: 10,
            cols: 6,
        },
        100: {
            rows: 10,
            cols: 10
        }
    };
    export default {
        name: "PlayerZone",
        components: {
            Coin
        },
        props: ['id', 'start', 'end', 'number_of_coins', 'playing'],
        data(){
            return {
                distribution: null,
            }
        },
        created() {
            this.distribution = coinsDistribution[this.number_of_coins];
            console.log("dist", this.distribution);
        }
    }
</script>

<style scoped>

</style>