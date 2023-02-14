<template>
    <div>
        <p>{{ name }}</p> <br>
        <button @click="updateName">Change Name</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Kossie Corder'
        }
    },

    methods: {
        updateName() {
            this.name = 'Kossie Corder Updated';
        }
    }
}
</script>

<style scoped>
    
</style>