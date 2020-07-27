<template>
  <div id="app">
    <Header></Header>
    <game-index></game-index>
    <Footer></Footer>
  </div>
</template>

<script>
import GameIndex from "./pages/GameIndex";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    GameIndex,
  }
}
</script>

<style>
  @import "~bootstrap-css-only/css/bootstrap.css";
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
:root {
  --main-color: #00a99d;
  --header-height: 60px;
  --header1-height: 60px;
  --footer-height: 60px;
}
</style>
