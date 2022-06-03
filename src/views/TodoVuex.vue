<template>
    <h1>Lista de tareas de Thanos</h1>
    <!--<h4Pendientes: {{ $store.state.todos.filter((t) => !t.completed).length }}</h4>-->
    <h4>Pendientes: {{ pending.length }}</h4>
    <hr />
    <button
        :class="{ active: currentTab === 'all' }"
        @click="currentTab = 'all'"
    >
        Todos
    </button>
    <button
        :class="{ active: currentTab === 'pending' }"
        @click="currentTab = 'pending'"
    >
        Pendientes
    </button>
    <button
        :class="{ active: currentTab === 'completed' }"
        @click="currentTab = 'completed'"
    >
        Completados
    </button>
    <div>
        <ul>
            <li
                v-for="{ id, completed, text } in getTodosByTab"
                :key="id"
                :class="{ completed: completed }"
                @dblclick="toogleTodo(id)"
            >
                {{ text }}
            </li>
        </ul>
    </div>

    <button @click="openModal">Crear Todo</button>

    <modal
        v-if="isOpen"
        @on:close="closeModal"
    >
        <template v-slot:header>
            <h1>Crear Todo</h1>
        </template>
        <template v-slot:body>
            <form @submit.prevent="createTodo(newTodoText), (isOpen = false)">
                <input
                    type="text"
                    placeholder="Nueva tarea"
                    v-model="newTodoText"
                />
                <br />
                <br />
                <button
                    type="submit"
                    @click="createTodo(newTodoText), (isOpen = false)"
                >
                    Crear
                </button>
            </form>
        </template>
    </modal>
</template>

<script>
    import useTodos from '@/composables/useTodos'
    import Modal from '@/components/Modal'
    export default {
        components: { Modal },
        setup() {
            return {
                ...useTodos(),
            }
        },
    }
</script>

<style scoped>
    div {
        display: flex;
        justify-content: center;
        text-align: center;
    }
    ul {
        width: 300px;
        text-align: left;
    }
    li {
        cursor: pointer;
    }
    .active {
        background-color: #2c3e50;
        color: white;
    }
    .completed {
        text-decoration: line-through;
    }
</style>
