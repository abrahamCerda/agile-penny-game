<template>
    <div class="player-zone">
        ZONA JUGADOR {{id}}
        PRIMER JUGADOR: {{start}}
        ULTIMO JUGADOR: {{end}}
    </div>
</template>

<script>
    export default {
        name: "PlayerZone",
        props: ['id', 'start', 'end'],
        data(){
            return {

            }
        }
    }
</script>

<style scoped>

</style>