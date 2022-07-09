import html from "../core.js";
import {connect} from "../store.js"
import Footer from "./Footer.js";
import Header from "./Header.js";
import TodosList from "./TodosList.js";
const connector = connect()
function App({todos}){
    return html`
    <section class="todoapp">
			${Header()}
			${todos.length > 0 &&TodosList()}
            ${todos.length > 0 && Footer()}
    </section>
    `
}
export default connector(App)