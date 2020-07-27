<template>
    <div class="container custom-body">
        <configuration></configuration>
    </div>
</template>

<script>
    import Configuration from "../components/Configuration";

    export default {
        name: "GameIndex",
        components: {Configuration},
        data: () => {
            return {

            }
        }
    }
</script>

<style scoped>
    .custom-body {
        margin-bottom: var(--footer-height);
    }
</style>