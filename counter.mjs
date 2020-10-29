import { h } from "./node_modules/preact/dist/preact.module.js";
import { useState } from "./node_modules/preact/hooks/dist/hooks.module.js";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return h("div", null, [
    h("h2", null, "Counter component"),
    h("p", { style: { fontSize: "3em" } }, `${counter}`),
    h("div", { style: { display: "flex", gap: ".5em" } }, [
      h(
        "button",
        { type: "button", onClick: () => setCounter((prev) => prev + 1) },
        "Increase"
      ),
      h(
        "button",
        {
          type: "button",
          onClick: () => setCounter((prev) => (prev > 0 ? prev - 1 : 0)),
        },
        "Decrease"
      ),
    ]),
  ]);
};

export default Counter;
