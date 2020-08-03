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

<style scoped lang="scss">
    .custom-body {
        height: 100%;
        overflow: auto;
        padding-top: $header-height + $header1-height;
        padding-bottom: $footer-height;
    }
</style>
