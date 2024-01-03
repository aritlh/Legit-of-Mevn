<template>
    <form @submit.prevent="submit">
        <!-- Movie name -->
        <v-text-field v-model="name.value.value" :counter="10" :error-messages="name.errorMessage.value"
            label="Movie Name*"></v-text-field>
        <!-- Movie description -->
        <v-text-field v-model="description.value.value" :error-messages="description.errorMessage.value"
            label="Movie Description*"></v-text-field>
        <!-- Movie release year -->
        <v-select v-model="release_year.value.value" :items="items" :error-messages="release_year.errorMessage.value"
            label="Movie Release Year*"></v-select>
        <!-- Movie genre -->
        <v-text-field v-model="genre.value.value" :error-messages="genre.errorMessage.value"
            label="Movie Genre*"></v-text-field>
        <!-- Submit movie -->
        <v-btn class="me-4" type="submit">Submit</v-btn>
        <!-- Clear movie -->
        <v-btn @click="handleReset">Clear</v-btn>
    </form>
    <div class="tw-mt-4">
        {{ msg }}
    </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate'
import { ref } from 'vue'

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        name(value) {
            if (value?.length >= 2) return true

            return 'Name needs to be at least 2 characters.'
        },
        description(value) {
            if (value) return true

            return 'Please add movie description'
        },
        release_year(value) {
            if (value) return true

            return 'Select an item.'
        },
        genre(value) {
            if (value) return true

            return 'Movie must have a genre.'
        }
    }
})

const name = useField('name')
const description = useField('description')
const release_year = useField('release_year')
const genre = useField('genre')

const items = ref([
    '2018',
    '2017',
    '2016',
    '2015'
])

const msg = ref('')

const submit = handleSubmit(values => {
    msg.value = JSON.stringify(values, null, 2)
})
</script>