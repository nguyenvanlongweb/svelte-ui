<script lang="ts">
  import {
    BiArrowLeftSquareFill,
    BiApple,
    HiSolidMenuAlt3,
  } from "oh-vue-icons/icons";
  import IconOh from "~/components/IconOh.svelte";
</script>

<svelte:head>
  <title>About page</title>
</svelte:head>

<div>
  <h1 class="apple-icon">this is page</h1>
  <IconOh icon={BiApple} class="apple-icon" />
  <IconOh icon={BiArrowLeftSquareFill} />
  <IconOh icon={HiSolidMenuAlt3} />
</div>

<style lang="scss">
  .apple-icon {
    color: tomato;
  }
</style>
