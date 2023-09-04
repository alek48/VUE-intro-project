<template>
  <div class="flex-vertical">
    <input type="number" v-model="num" />
    <button @click="add2">Add</button>
  </div>
</template>

<script>
import store from '../main.js'
import { ref } from 'vue'

const num = ref(0)

function add2 (event) {
  store.dispatch('plusTwo', { num })
}

export default {
  data () {
    return { add2, num }
  }
}
</script>

<style scoped></style>
