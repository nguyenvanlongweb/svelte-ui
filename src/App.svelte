<script>
  import { Router, Route, Link } from "svelte-navigator";
  import routes from "~/routes/index";
  import StrawberryLayout from "./layouts/StrawberryLayout.svelte";
</script>

<Router>
  <header>
    <h1>History</h1>

    <nav>
      <Link to="/">Home</Link>

      {#each routes as child}
        <Link to={child.path}>{child.path.replace("/", "")}</Link>
      {/each}
    </nav>
  </header>

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
