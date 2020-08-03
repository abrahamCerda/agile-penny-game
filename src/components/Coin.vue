<template>
    <div class="rounded-circle bg-warning coin"
         @click="rotate">
    </div>
</template>

<script>
    export default {
        name: "Coin",
        data(){
          return {
          }
        },
        methods: {
            rotate(){

            }
        }
    }
</script>

<style scoped>
    .coin {
        width: 30px;
        height:30px;
        display: inline-block;
        cursor: pointer;
        transition: transform 0.5s;

    }

    .coin:hover {
        transform: rotateY(180deg);
    }


</style>
