<script setup lang="ts">
import { reactive } from 'vue'
import axios from 'axios'

const state = reactive({
  list: [],
})

try {
  (async() => {
    const res = await axios('http://localhost:5000/api/list')
    state.list = res.data
    console.log(state.list)
  })()
}
catch (err) {
  console.log(err)
}

</script>

<template>
  <div>
    <h2> 資料 </h2>
    <ul
      max-w-4xl
      m="x-auto y-4"
    >
      <li
        flex
        justify-start
        items-center
        text-right
        p="b-2 t-2"
        border="b-1"
      >
        <span min-w-10rem>標題</span>
        <span min-w-10rem>學生</span>
        <span min-w-10rem>MM 幣</span>
        <span min-w-15rem>兌換物品</span>
        <span min-w-10rem>操作者</span>
      </li>
      <li
        v-for="item in state.list"
        :key="item.id"
        flex
        justify-start
        items-center
        text-right
        p="b-1 t-2"
        border="b-1"
      >
        <span min-w-10rem>{{ item.title }}</span>
        <span min-w-10rem>{{ item.student }}</span>
        <span min-w-10rem>{{ item.coin }}</span>
        <span min-w-15rem>{{ item.item }}</span>
        <span min-w-10rem>{{ item.operator }}</span>
      </li>
    </ul>
  </div>
</template>
