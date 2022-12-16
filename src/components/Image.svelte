<script lang="ts">
  import images from "~/assets/img";

  let src: string = "";
  let alt: string = "";

  const handleError = (): void => {
    src = images.imgErr;
  };

  if (!src) handleError();

  export { src, alt };
</script>

<img
  {src}
  {alt}
  on:error={handleError}
  class={`image ${$$props.class ? $$props.class : ""}`}
/>

<style>
  .image {
    width: 100%;
    height: 100%;
  }
</style>
