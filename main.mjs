import { h } from "./node_modules/preact/dist/preact.module.js";

import MainPage from "./main-page.mjs";

const App = () => {
  return h("div", null, h("main", null, h(MainPage)));
};

export default App;
