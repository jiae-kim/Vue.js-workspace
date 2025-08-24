<template>
  <div>
    <Sender />
    <hr>
    <Receiver />
  </div>
</template>

<script>
  import Receiver from './components/Receiver.vue';
  import Sender from './components/sender.vue';
  export default {
    name : "App5",
    components : {Sender, Receiver}
  }
</script>

<style scoped>

</style>