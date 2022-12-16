<script lang="ts">
  import Container from "~/components/Container.svelte";
  import Wrapper from "~/components/Wrapper.svelte";
  import SearchNav from "~/components/layouts/SearchNav.svelte";
</script>

<div>
  <SearchNav />
  <Container>
    <Wrapper>
      <h2>This is search layout</h2>
      <slot />
    </Wrapper>
  </Container>
</div>
