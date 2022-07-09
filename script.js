import { attach } from "./store.js";
import App from "./component/App.js";
const elment = document.querySelector('.root')

attach(App,elment)