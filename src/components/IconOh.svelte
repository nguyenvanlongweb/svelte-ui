<script lang="ts">
  let icon: any = {};
  let viewBox: string = `${icon.minX || 0} ${icon.minY || 0} ${
    icon.width || 0
  } ${icon.height || 0}`;

  export { icon };
</script>

<svg
  on:click
  height={icon.width}
  width={icon.width}
  fill="currentColor"
  {viewBox}
  {...icon.attr}
  class={`icon  ${$$props.class ? $$props.class : ""}`}
>
  {@html icon.raw}
</svg>

<style>
  .icon {
    color: var(--color-icon);
    height: 20px;
    width: 20px;
  }
</style>
