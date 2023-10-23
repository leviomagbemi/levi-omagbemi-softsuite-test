<template>
  <Header />
  <section id="main-sec">
    <Aside />
    <RouterView />
  </section>
  <Footer />
  <CreateElementForm />
</template>

<script setup>
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'
import Footer from '@/components/Footer.vue'
import CreateElementForm from '@/components/CreateElementForm.vue'
</script>

<style lang="scss" scoped>
#main-sec {
  display: grid;
  grid-template-columns: auto 2fr;
  gap: 32px;
}
</style>
