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
        <p><i>Time remaining in different units.</i></p>
        <div id="clocks-grid">
            <div class="card clock-card" v-for="(clock, clockIndex) in Object.keys(data)">
                <div class="circle" :style="{rotate: snapshot[clock] + 'deg'}">
                    <div class="ticker" :class="{[clock]: true}"></div>
                </div>
                <div>
                    <h5>{{ data[clock] }}</h5>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
