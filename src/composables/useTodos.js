import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {
    const store = useStore()

    const currentTab = ref('all')
    const isOpen = ref(false)
    const newTodoText = ref('')

    return {
        currentTab,
        newTodoText,

        all: computed(() => store.getters['allTodos']),
        completed: computed(() => store.getters['completedTodos']),
        pending: computed(() => store.getters['pendingTodos']),

        getTodosByTab: computed(() =>
            store.getters['getTodosByTab'](currentTab.value),
        ),
        //** Methods */
        toogleTodo: (id) => store.commit('toggleTodo', id),
        createTodo: (text) => store.commit('createTodo', text),
        isOpen,
        openModal: () => (isOpen.value = true),
        closeModal: () => (isOpen.value = false),
    }
}

export default useTodos
