<template>
    <div class="container-fluid">
        <div class="row custom-header">
            <div class="col">
                HEADER
            </div>
        </div>
        <div class="row">
            <div class="col">
                HEADER 1
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .custom-header {
        background-color: var(--main-color);
    }
</style>