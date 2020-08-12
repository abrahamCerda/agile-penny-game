<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3>
          Resultados
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-4 rounds-results-tables-container">

      </div>
      <div class="col-12 col-sm-4 round-results-charts-co">

      </div>
      <div class="col-12 col-sm-4">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameResult",
  props: ['results'],
  data(){
    return {
      formattedResults: {},
    }
  },
  created(){
  }
}
</script>

<style scoped>

</style>
