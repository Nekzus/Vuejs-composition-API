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
</template>

<script>
    import useTodos from '@/composables/useTodos'
    export default {
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
