import "~/assets/scss/base.scss";
import "~/assets/scss/main.scss";

import App from "./App.svelte";

// @ts-ignore;
const app = new App({
  target: document.getElementById("app"),
});

export default app;
