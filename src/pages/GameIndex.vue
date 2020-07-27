<template>
    <div class="container custom-body">
        <configuration @play="onPlay" v-if="!isAlreadyConfigured">
        </configuration>
    </div>
</template>

<script>
    import Configuration from "../components/Configuration";

    export default {
        name: "GameIndex",
        components: {Configuration},
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