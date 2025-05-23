<script setup>
    import { getTimePercentage } from '../utils'

    defineProps({
        data: Object
    })
    let snapshot = getTimePercentage()
    console.log(snapshot)
</script>

<template>
    <section id="clocks">
        
    </section>
</template>

<style scoped>

</style>
