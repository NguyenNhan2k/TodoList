import html from "../core.js";
import {connect} from "../store.js"

const connector = connect()
function TodoListItem({todo,editIndex,index}){
    return html`
        <li class="${todo.completed && 'completed'} ${editIndex == index &&'editing'} ">
            <div class="view">
                <input class="toggle" onchange = " dispatch('toggle',${index})" type="checkbox"
                ${todo.completed && 'checked'}
                >
                <label  ondblclick = "dispatch ('startEdit',${index})">${todo.title}</label>
                <button class="destroy" onclick = "dispatch ('destroy',${index})"></button>
            </div>
            <input class="edit" value="${todo.title}"
            onkeyup = "event.keyCode === 13 && dispatch ('endEdit',this.value.trim())"
            onblur = "dispatch ('endEdit',this.value.trim())"
            >
        </li>
        
    `
}
export default connector(TodoListItem)