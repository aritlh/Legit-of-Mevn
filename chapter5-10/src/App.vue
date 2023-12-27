<template>
  <ul>
    <li>
      <router-link :to="{ name: 'home' }">Home</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'about' }">About</router-link>
    </li>
  </ul>
  <router-view />
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>
