<template>
  <div>
    <NoSlotTest />
    <SlotTest/>
    <NamedSlotTest />
    <CheckBoxList />
  </div>
</template>

<script>
import NoSlotTest from './components/NoSlotTest.vue';
import SlotTest from './components/SlotTest.vue';
import NamedSlotTest from './components/NamedSlotTest.vue';
import CheckBoxList from './components/CheckBoxList.vue';

  export default {
    name : "App",
    components : {NoSlotTest, SlotTest, NamedSlotTest, CheckBoxList}
  }
</script>

<style scoped>

</style>