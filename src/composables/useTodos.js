import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {
    const store = useStore()

    const currentTab = ref('all')

    return {
        currentTab,

        all: computed(() => store.getters['allTodos']),
        completed: computed(() => store.getters['completedTodos']),
        pending: computed(() => store.getters['pendingTodos']),

        getTodosByTab: computed(() =>
            store.getters['getTodosByTab'](currentTab.value),
        ),
        //** Methods */
        toogleTodo: (id) => store.commit('toggleTodo', id),
    }
}

export default useTodos
