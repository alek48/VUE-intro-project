<template>
  <div class="main">
    <div>
      <div class="nbar">
        <router-link to="/1">Addition</router-link>
        <router-link to="/2">Multiplication</router-link>
        <router-link to="/3">Division</router-link>
      </div>
      <div class="counter">
        Variable "sum"<br />
        {{ this.$store.state.sum }}
      </div>
    </div>
    <div class="flex-center">
      <transition mode="out-in">
        <router-view class="components"> </router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  name: 'App',
  components: { RouterView }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  align-content: center;
  justify-content: center;
}

body {
  font-family: Calibri;
  margin: 0;
}

html {
  background-color: #333333;
  color: white;
}
.v-enter-active {
  transition: all 0.9s ease;
}
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate(0, -10px);
}
.v-enter {
  transform: translate(0, 30px);
}

.v-leave-from {
  opacity: 1;
}
.counter {
  text-align: center;
  font-size: xx-large;
  font-weight: bold;
  margin-top: 0.5em;
}
.nbar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #202020;
  border-radius: 0 0em 2em 2em;
  padding: 0.5em;
  padding-bottom: 1em;
}
.components {
  padding: 2em;
  background-color: #e0e0e0;
  justify-content: center;
  display: flex;
  width: fit-content;
  padding: 2em 5em 2em 5em;
  align-self: center;
  border-radius: 0.5em;
  margin-top: 1em;
}
a,
button {
  padding: 1em 2em 1em 2em;
  margin: 0.5em;
  background-color: hsl(261, 100%, 50%);
  border-radius: 1em;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
}

.router-link-active {
  background-color: hsl(261, 20%, 40%);
  color: #e0e0e0;
}
.main {
  display: flex;
  flex-direction: column;
}
.flex-center {
  display: flex;
  justify-content: center;
}
input {
  width: 10em;
  text-align: center;
  border: none;
  background-color: transparent;
  border-bottom: solid hsl(261, 100%, 50%);
  margin-bottom: 1em;
  padding: 0.2em;
  font-size: large;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input:focus {
  border-bottom: solid hsl(261, 100%, 80%);
  outline: none;
}

.flex-vertical {
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
}
</style>
