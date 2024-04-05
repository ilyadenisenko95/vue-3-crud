<script setup>
import PageFooter from './components/layout/PageFooter.vue';
import PageHeader from './components/layout/PageHeader.vue';
</script>

<template>
  <PageHeader />
  <main class="page-layout">
    <RouterView />
  </main>
  <PageFooter />
</template>

<style lang="scss" scoped>
.page-layout {

}
</style>
