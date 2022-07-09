import reduce from "./reduce.js";
import { createStore } from "./core.js";
import logger from "./logger.js";
const {attach,connect,dispatch} = createStore(logger(reduce))
window.dispatch = dispatch
export {
    attach,
    connect
}