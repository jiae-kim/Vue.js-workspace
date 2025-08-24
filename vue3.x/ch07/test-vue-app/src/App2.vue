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
  import CheckboxItem from './components/CheckboxItem2.vue';
  export default {
    name : "App2",
    components : {CheckboxItem},
    data() {
      return {
        idols : [
          {id:1, name:"BTS", checked:true},
          {id:2, name:"Black Pink", checked:false},
          {id:3, name:"SNSD", checked:false},
          {id:4, name:"TVXQ", checked:false},
        ]
      }
    }
  }
</script>

<style scoped>

</style>