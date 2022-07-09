
import storerage from "./until/storerage.js"
const init = {
        todos: storerage.get(),
        filter: 'all',
        filters: {
            all: () => true,
            active: todo => !todo.completed,
            completed: todo => todo.completed
        },
        editIndex:null
}
const actions = {
    add({ todos}, title) {
        if ( title) {
            todos.push({
                title,
                completed: false
            })
            storerage.set(todos)
        }
        
    },
    toggle({todos}, index) {
        const todo = todos[index]
        todo.completed = !todo.completed
        storerage.set(todos)
    },
    destroy({todos}, index) {
       const todo = todos
       todo.splice(index,1)
       storerage.set(todos)
    },
    toggleAll ({todos}, completed) {
        todos.forEach(todo => {
           todo.completed = completed
        });
        storerage.set(todos)
    },
    switchType(state, type ) {
        state.filter = type
    },
    clearAll(state) {
        state.todos = state.todos.filter(state.filters.active)
        storerage.set(state.todos)
    },
    startEdit(state,index) {
        state.editIndex = index
    },
    endEdit(state,value) {
        if (state.editIndex !== null) {
            if(value) {
                state.todos[state.editIndex].title = value
                state.editIndex = null
                storerage.set(state.todos)
            }else {
                this.destroy(state,state.editIndex)
            }
           

        }
       
    }
}
export default function reduce (state = init, action, args) {
    actions[action] && actions[action](state,...args)
    return state
}