<template>
    <div class="custom-body">
        <configuration @play="onPlay" v-if="!isAlreadyConfigured">
        </configuration>
        <board v-if="isAlreadyConfigured"
               :configuration-result="configurationResult">
        </board>
    </div>
</template>

<script>
    import Configuration from "../components/Configuration";
    import Board from "../components/Board";

    export default {
        name: "GameIndex",
        components: {Configuration, Board},
        computed: {
            isAlreadyConfigured(){
                return this.configurationResult !== null;
            }
        },
        data: () => {
            return {
                configurationResult: null,
            }
        },
        methods: {
            onPlay(configurationResult){
                this.configurationResult = configurationResult;
            }
        }
    }
</script>

<style scoped>
    .custom-body {
        margin-bottom: var(--footer-height);
    }
</style>