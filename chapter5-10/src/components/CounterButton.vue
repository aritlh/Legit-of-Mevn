<template>
    <v-btn @click="counter++">Click Button from Vuetify! {{ counter }}</v-btn>
</template>

<script setup>
import { ref } from 'vue';

const counter = ref(0)
</script>