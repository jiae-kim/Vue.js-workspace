<template>
  <div>
    <h2>App 컴포넌트</h2>
    <hr />
    <ul>
      <CheckboxItem v-for="idol in idols" :key="idol.id" :idol="idol"/>
    </ul>
  </div>
</template>

<script>
  import CheckboxItem from './components/CheckboxItem3.vue';
import idol from './idol';
  export default {
    name : "App3",
    components : {CheckboxItem},
    data() {
      return {
        idols : [
          new idol(1, "BTS", true),
          new idol(2, "BLACK PINK", false),
          new idol(3, "EXO", false),
          new idol(4, "NCT", false),
        ]
      }
    }
  }
</script>

<style scoped>

</style>