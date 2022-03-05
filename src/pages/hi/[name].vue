<script setup lang="ts">
const props = defineProps<{ name: string }>()
const router = useRouter()
</script>

<template>
  <div>
    <div i-carbon-pedestrian text-4xl inline-block />
    <p>
      Hi, {{ props.name }}
    </p>
    <p text-sm op50>
      <em> 這邊是 {{ props.name }} 的資料</em>
    </p>
    <h2 m-10>
      WIP ...
    </h2>
    <p>開發測試中 ...</p>

    <div>
      <button
        class="btn m-3 text-sm mt-8"
        @click="router.back()"
      >
        返回
      </button>
    </div>
  </div>
</template>
