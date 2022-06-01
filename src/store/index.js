import { createStore } from 'vuex'

export default createStore({
    state: {
        todos: [
            {
                id: '1',
                text: 'Recolectar las gemas del infinito',
                completed: false,
            },
            {
                id: '2',
                text: 'Gema del alma',
                completed: true,
            },
            {
                id: '3',
                text: 'Gema del poder',
                completed: true,
            },
            {
                id: '4',
                text: 'Gema de la realidad',
                completed: false,
            },
            {
                id: '5',
                text: 'Conseguir nuevos aliados competentes',
                completed: false,
            },
        ],
    },
    getters: {
        pendingTodos(state, getters, rootState) {
            return state.todos.filter(todo => !todo.completed)
        }
    },
    mutations: {},
    actions: {},
    modules: {},
})
