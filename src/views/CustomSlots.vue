<template>
    <h1>Aprendiendo Slots</h1>
    <button>Abrir Modal</button>
    <modal
        title="hola mundo"
        user="user"
    >
        <!-- <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <button>Salir</button>
        <h2>Titulo del modal</h2> -->
        <template v-slot:footer>
            <button>Salir</button>
        </template>
        <template v-slot:header>
            <h2>Titulo del modal</h2>
        </template>
        <template v-slot:body>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </template>
    </modal>
</template>

<script>
    import Modal from '@/components/Modal'
    import { useRoute } from 'vue-router'
    export default {
        name: 'slots',
        components: { Modal },
        setup() {},
    }
</script>

<style></style>
