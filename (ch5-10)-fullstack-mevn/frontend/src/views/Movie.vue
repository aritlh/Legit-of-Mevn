<template>
    <div class="tw-flex tw-flex-wrap tw-gap-4">
        <v-card v-if="movie">
            <div>
                <v-card-title>{{ movie.name }}</v-card-title>
                <v-card-subtitle>{{ movie.release_year }} - {{ movie.genre }}</v-card-subtitle>
            </div>
            <v-card-text v-html="movie.description"></v-card-text>
            <Rating />
        </v-card>
    </div>
</template>

<script setup>
import Rating from '../../partials/Rating.vue';
import axios from 'axios';
import VueSweetalert2 from 'sweetalert2'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const movie = ref("")
const msg = ref("")
const route = useRoute()

async function getMovie(id) {
    try {
        const response = await axios.get(`http://localhost:8081/api/movies/${id}`)
        movie.value = response.data
    } catch (error) {
        msg.value = VueSweetalert2('failed', `${error.toString()}`)
    }
}

onMounted(() => {
    getMovie(route.params.id)
})
</script>