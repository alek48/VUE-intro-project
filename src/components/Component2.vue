<template>
  <div class="flex-vertical">
    <input type="number" v-model="num" />
    <button @click="mul2">Multiply</button>
  </div>
</template>

<script>
import store from '../main.js'
import { ref } from 'vue'

const num = ref(0)

function mul2 (event) {
  store.dispatch('timesTwo', { num })
}

export default {
  data () {
    return { mul2, num }
  }
}
</script>

<style scoped></style>
