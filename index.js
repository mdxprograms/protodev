import * as R from "ramda";

const onEvent = R.invoker(2, "addEventListener");

const bgOrangeOnClick = onEvent(
  "click",
  ({ target }) => (target.style.background = "orange"),
);

const helloOnClick = onEvent(
  "click",
  ({ target }) => (target.textContent = "Hellllooo!"),
);

helloOnClick(document);
bgOrangeOnClick(document);
