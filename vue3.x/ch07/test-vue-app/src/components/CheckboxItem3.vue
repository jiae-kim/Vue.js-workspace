<template>
    <li>
        <input type="checkbox" :checked="idol.checked" /> {{ idol.name }}
    </li>
</template>

<script>
    import Idol from "../idol";
    export default {
        name : "CheckboxItem3",
        props : {
            idol : Idol
        }
    }
</script>

<style scoped>

</style>