import { h, render } from "./node_modules/preact/dist/preact.module.js";

import App from "./main.mjs";

const root = document.getElementById("preact-app");

render(h(App), root);
