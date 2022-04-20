<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
</script>

<template>
  <nav text-xl mt-6 inline-flex gap-2 class="footer-wrapper">
    <button class="icon-btn !outline-none" @click="toggleDark()">
      <div v-if="isDark" i-carbon-moon />
      <div v-else i-carbon-sun />
    </button>

    <!-- <a
      class="icon-btn"
      i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/benben6515"
      target="_blank"
      title="GitHub"
    /> -->
  </nav>
</template>

<style lang="scss">
* {
  font-family: '微軟正黑體'
}
.footer-wrapper {
  // TODO: maybe use this
  display: none !important;
  position: fixed;
  top: 0;
  right: 2rem;
}
</style>
