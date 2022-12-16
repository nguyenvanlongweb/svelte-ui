<script lang="ts">
  let callback: Function = null;

  const func = () => {
    if (callback) callback();
  };

  export { callback };
</script>

<div>
  <span class="back-overlay" />
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <span on:click={func} class="front-overlay" />
</div>

<style lang="scss">
  .back-overlay {
    position: fixed;
    inset: 0;
    z-index: -1;
    background-color: var(--color-overlay);
  }

  .front-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 200px;
    height: 100%;
    background: transparent;
    z-index: 1;
  }
</style>
