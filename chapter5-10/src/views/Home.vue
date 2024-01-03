<template>
    <div>
        <h1 class="tw-text-2xl">Home Page</h1>
        <div>{{ message }}</div>
    </div>
    <v-btn color="primary" v-on:click="reply">Reply</v-btn>
</template>
  
<script>
export default {
    data: () => ({
        message: 'Hello there, how are you this morning?'
    }),
    methods: {
        reply() {
            this.message = 'Im doing great, thank you!'
        }
    }
}
</script>
  