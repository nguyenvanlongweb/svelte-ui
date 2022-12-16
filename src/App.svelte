<script lang="ts">
  import { onMount } from "svelte";
  import { screenWidth } from "~/stores";
  import { Router, Route } from "svelte-navigator";
  import StrawberryLayout from "./layouts/StrawberryLayout.svelte";
  import routes from "~/routes/index";

  onMount(() => {
    screenWidth.set(window.innerWidth);

    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        screenWidth.set(window.innerWidth);
      });
    }
  });
</script>

<Router>
  <main>
    {#each routes as child}
      <Route path={child.path}>
        <svelte:component this={child.layout || StrawberryLayout}>
          <svelte:component this={child.component} />
        </svelte:component>
      </Route>
    {/each}
  </main>
</Router>
