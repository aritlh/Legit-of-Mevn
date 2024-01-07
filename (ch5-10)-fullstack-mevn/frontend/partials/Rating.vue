<template>
    <div class="text-left">
        <v-rating v-model="rating" color="orange-lighten-1" active-color="blue"></v-rating>
        <v-btn @click="submitRating" color="primary">Submit Rating</v-btn>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import VueSweetalert2 from 'sweetalert2'
import { useRoute } from 'vue-router';

const rating = ref(0)
const route = useRoute()

const submitRating = async () => {
    try {
        await axios.post(`http://localhost:8081/movies/rate/${route.params.id}`, {
            rating: rating.value
        })

        // console.log('Rating submitted successfully!')
        VueSweetalert2.fire('Success', `Rate created successfully!<br>Thank you for ratting ${rating.value}`)
    } catch (error) {
        // console.error('Error submitting rating:', error.message)
        VueSweetalert2.fire('Failed', `${error.toString()}<br>Bug founded!`)
    }
}
</script>
  