<template>
    <div class="container border border-right-0 border-dark">
        <div class="row">
            <div class="col border-right border-dark" v-for="index in configurationResult.number_of_players"
                 :key="index">
                <player-zone :id="index" :start="index === 1" :end="index ===
                 configurationResult.number_of_players"
                             :number_of_coins="configurationResult.total_number_of_coins"
                :playing="isPlayerPlaying(index)">
                </player-zone>
            </div>
        </div>
    </div>
</template>

<script>
    import PlayerZone from "./PlayerZone";

    export default {
        name: "Board",
        components: {
            PlayerZone,
        },
        props:['configurationResult'],
        data() {
            return {
                colClass: 'col-',
                playingPlayer: 1,
            }
        },
        created() {
        },
        methods: {
            isPlayerPlaying(playerIndex){
                return this.playingPlayer === playerIndex;
            }
        }
    }
</script>

<style scoped>

</style>