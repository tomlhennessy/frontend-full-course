<script setup>
  import Layout from './components/layouts/Layout.vue'
  import Hero from './components/Hero.vue'
  import Clocks from './components/Clocks.vue'
  import Calendar from './components/Calendar.vue'
  import Summary from './components/Summary.vue'

  import { calculateTimeLeft } from './utils'

  const birthDate = '1995-06-15'
  const lifeExpectancy = 80
  const name = 'Tom'
  const data = calculateTimeLeft(birthDate, lifeExpectancy)
  console.log(data)

  const totalProps = {
    birthDate,
    lifeExpectancy,
    name,
    data
  }
</script>

<template>
  <Layout>
    <Hero :name="name" :data="data" />
    <Clocks v-bind="totalProps" />
    <Calendar />
    <Summary />
  </Layout>
</template>

<style scoped>

</style>
