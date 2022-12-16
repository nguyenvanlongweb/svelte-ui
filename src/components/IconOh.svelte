<script lang="ts">
  let icon: any = {};
  let viewBox: string = `${icon.minX || 0} ${icon.minY || 0} ${
    icon.width || 0
  } ${icon.height || 0}`;

  export { icon };
</script>

<svg height="24" width="24" {viewBox} fill="currentColor" class={$$props.class}>
  {@html icon.raw}
</svg>
