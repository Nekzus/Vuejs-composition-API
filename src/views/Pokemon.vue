import { useRouter } from 'vue-router';
<template>
    <h1>Pokemon View: {{ id }}</h1>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
    name: 'pokemon-id',
    setup() {
        const route = useRoute()
        console.log(route.params)
        const id = route.params.id
        return {
            id,
        }
    },
}
</script>

<style>
</style>