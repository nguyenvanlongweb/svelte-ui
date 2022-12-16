<script lang="ts">
  import {
    BiArrowLeftSquareFill,
    BiApple,
    HiSolidMenuAlt3,
    RiSearchLine,
  } from "oh-vue-icons/icons";
  import IconOh from "~/components/IconOh.svelte";
</script>

<svelte:head>
  <title>About page</title>
</svelte:head>

<div class="about-page">
  <h1>this is page</h1>
  <!-- <IconOh icon={BiApple} class="apple-icon" />
  <IconOh icon={BiArrowLeftSquareFill} /> -->
  <IconOh icon={HiSolidMenuAlt3} class="apple-icon" />
  <IconOh icon={RiSearchLine} class="icon" />
</div>

<style lang="scss">
  .about-page {
    :global(.apple-icon) {
      color: tomato;
      width: 20px;
      height: 20px;
    }

    :global(.icon) {
      color: peru;
      width: 20px;
      height: 20px;
    }
  }
</style>
