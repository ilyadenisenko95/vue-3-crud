<script setup>
import PageFooter from './components/layout/PageFooter.vue';
import PageHeader from './components/layout/PageHeader.vue';
</script>

<template>
  <PageHeader />
  <main>
    <RouterView />
  </main>
  <PageFooter />
</template>
