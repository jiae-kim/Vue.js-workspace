<template>
  <div>
    <h2>App 컴포넌트</h2>
    <hr />
    <ul>
      <!-- <CheckboxItem v-for="idol in idols" :key="idol.id" :name="idol.name" :checked="idol.checked"/> -->
      <CheckboxItem v-for="idol in idols" :key="idol.id" v-bind="idol"/>
    </ul>
  </div>
</template>

<script>
  import CheckboxItem from './components/CheckboxItem.vue';
  export default {
    name : "App",
    components : {CheckboxItem},
    data() {
      return {
        idols : [
          {id:1, name:"BTS", checked:true},
          {id:2, name:"Black Pink", },
          {id:3, name:"SNSD", },
          {id:4, name:"TVXQ",},
        ]
      }
    }
  }
</script>

<style scoped>

</style>