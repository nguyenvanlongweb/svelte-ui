<button on:click class={`button ${$$props.class ? $$props.class : ""}`}
  ><slot /></button
>

<style>
  .button {
    min-height: 40px;
    min-width: 40px;
    padding: 0 4px;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
</style>
