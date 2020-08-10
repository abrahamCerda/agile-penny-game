<template>
<p>
  {{hours | formatTime}}:{{minutes | formatTime}}:{{seconds |formatTime}}
</p>
</template>

<script>
export default {
  name: "Timer",
  props: ['running'],
  data(){
    return {
      currentDate: null
    }
  },
  mounted(){
    setInterval(() => {
      if(!this.running){
        return;
      }
      this.currentDate += 1000;
      this.$emit('timeChange', {
        millis: this.currentDate,
        seconds: this.seconds,
        minutes: this.minutes,
        hours: this.hours,
      });
    }, 1000);
  },
  computed: {
    hours(){
      return Math.floor((this.currentDate / (1000 *60 *60)) % 24);
    },
    minutes(){
      return Math.floor((this.currentDate/ (1000* 60)) % 60);
    },
    seconds(){
      return Math.floor((this.currentDate/1000) % 60);
    }
  },
  filters: {
    formatTime(value) {
      if (value < 10) {
        return '0' + value;
      }
      return value;
    }
  }
}
</script>

<style scoped>

</style>
