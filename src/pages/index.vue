<script setup lang="ts">
const name = ref('')

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <div i-carbon-campsite text-2rem inline-block />
    <p>
      <a rel="noreferrer" href="https://www.instagram.com/_moneymap/?hl=zh-tw" target="_blank">
        MoneyMap
      </a>
    </p>
    <p>
      <em text-sm op75>MoneyMap 學員查詢</em>
    </p>

    <div py-4 />

    <input
      id="input"
      v-model="name"
      placeholder="請輸入你的 Email"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      m-10
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        查詢
      </button>
    </div>
  </div>
</template>
