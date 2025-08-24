<template>
  <div>
    <!-- <InputName :name="searchName" @update:name="changeSearchName" /> -->
    <InputName v-model:name="searchName" />
    <h2>검색어 : {{ searchName }}</h2>
  </div>
</template>

<script>
import InputName from './components/InputName.vue';
export default {
  name : "App",
  components : {InputName},
  data() {
    return {searchName : "John"}
  },
  methods : {
    changeSearchName(name) {
      this.searchName = name;
    }
  }
}
</script>
