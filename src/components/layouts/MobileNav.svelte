<script lang="ts">
  import Wrapper from "~/components/Wrapper.svelte";
</script>

<div class={`nav ${$$props.class ? $$props.class : ""}`}>
  <Wrapper>
    <ul>
      <li>
        <div>fdsf</div>
      </li>
    </ul>
  </Wrapper>
</div>

<style lang="scss">
  .nav {
    position: absolute;
    inset: 0;
    //   background: rgba(0, 0, 0, 0.5);
    // border-left: 1px solid var(--color-border);
    background-color: var(--color-bg);
  }
</style>
