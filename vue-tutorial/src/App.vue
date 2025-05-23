<script setup>
  import { ref } from 'vue'
  import Layout from './components/layouts/Layout.vue'
  import Hero from './components/Hero.vue'
  import Clocks from './components/Clocks.vue'
  import Calendar from './components/Calendar.vue'
  import Summary from './components/Summary.vue'
  import Portal from './components/Portal.vue'
  import Form from './components/Form.vue'

  import { calculateTimeLeft } from './utils'

  const defaultBD = '1995-06-15'
  const defaultLE = 80
  const birthDate = ref(defaultBD)
  const lifeExpectancy = ref(defaultLE)
  const name = ref('Tom')
  const data = ref(calculateTimeLeft(defaultBD, defaultLE))
  console.log(data)

  const showModal = ref(false)
  function handleToggleModal() {
    showModal.value = !showModal.value
  }

  function handleUpdateData(n, b, e) {
    if (!n || !b || !e) { return }

    // save new data to localStorage (browser db)

    name.value = n
    birthDate.value = b
    lifeExpectancy.value = parseInt(e)
    data.value = calculateTimeLeft(b, parseInt(e))
    showModal.value = false

  }

  const totalProps = {
    birthDate,
    lifeExpectancy,
    name,
    data
  }
</script>

<template>
  <Layout>
    <Portal :handleCloseModal="handleToggleModal" :showModal="showModal">
      <Form />
    </Portal>
    <Hero :name="name" :data="data" />
    <Clocks v-bind="totalProps" />
    <Calendar v-bind="totalProps" />
    <Summary />
  </Layout>
</template>

<style scoped>

</style>
