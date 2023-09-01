<template>
  <div class="flex-vertical">
    <input type="number" v-model="num" />
    <button @click="div2">Divide</button>
  </div>
</template>

<script>
import store from "../main.js";
import { ref } from "vue";

const num = ref(0);

function div2(event) {
  store.dispatch("overTwo", { num });
}

export default {
  data() {
    return { div2, num };
  }
};
</script>

<style scoped></style>
