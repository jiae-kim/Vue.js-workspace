<template>
  <div>
    <h1>This is Home page</h1>    
    <KossieCorder />
  </div>
</template>

<script>
import KossieCorder from '@/components/KossieCorder.vue';

export default {
  components: {
    KossieCorder
  },

  data() {
    return {
      name: 'Jay Park'
    }
  }
}
</script>

<style scoped>
/* scoped 작성시 해당 template에만 적용됨, 작성하지 않으면 전역으로 적용됨 */
h1 {
  color: blue;
}
</style>