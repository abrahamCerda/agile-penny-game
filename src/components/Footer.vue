<template>
    <footer class="container-fluid">
        <div class="row custom-footer">
            <div class="col">
                FOOTER
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .custom-footer {
        background-color: black;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: var(--footer-height);
    }
</style>