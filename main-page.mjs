import { h } from "./node_modules/preact/dist/preact.module.js";
import Counter from "./counter.mjs";

const MainPage = () => {
  return h("div", null, [
    h("h1", null, "Preact browser modules"),
    h(
      "p",
      null,
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid laboriosam
  sit accusantium iusto dolores id eveniet aut sapiente. Voluptates voluptate
  recusandae nobis corporis quod quasi libero ipsum et molestias ipsam! Ducimus
  laudantium aut molestias quos atque delectus eos repellendus rem.`
    ),
    h(Counter),
  ]);
};

export default MainPage;
