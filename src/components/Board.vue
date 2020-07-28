<template>
    <div class="container">
        <div class="row">
            <div :class="colClass" v-for="index in configurationResult.number_of_players"
                 :key="index">
                <player-zone :id="index" :start="index === 1" :end="index ===
                 configurationResult.number_of_players">
                </player-zone>
            </div>
        </div>
    </div>
</template>

<script>
    import PlayerZone from "./PlayerZone";

    const MAX_COLS = 12; // Bootstrap max cols
    export default {
        name: "Board",
        components: {
            PlayerZone,
        },
        props:['configurationResult'],
        data() {
            return {
                colClass: 'col-'
            }
        },
        created() {
            const colEqualWidth = Math.floor(MAX_COLS/this.configurationResult.number_of_players);
            this.colClass = `${this.colClass}${colEqualWidth}`;
        }
    }
</script>

<style scoped>

</style>