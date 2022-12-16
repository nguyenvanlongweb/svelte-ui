<script lang="ts">
  import { globalHistory } from "svelte-navigator";
  import { searchValueStore } from "~/stores";
  import IconOh from "~/components/IconOh.svelte";
  import { MdClose, PrSearch } from "oh-vue-icons/icons";

  let searchValue: string = "";
  let callback: Function = null;
  // let currenTitle: string = document.title;
  let currentUrl: string =
    globalHistory.location.origin + globalHistory.location.pathname;

  let timeOut: ReturnType<typeof setTimeout>;

  const clearValue = (): void => {
    searchValue = "";
    searchValueStore.set("");
  };

  const handleChange = (): void => {
    if (searchValue.charAt(0) === " ") {
      searchValue = "";
      window.history.pushState("", "", `${currentUrl}`);
      // document.title = currenTitle;
      // console.log({ currenTitle });
    } else {
      window.history.pushState("", "", `${currentUrl}?q=${searchValue}`);
      // document.title = `Tìm kiếm với "${searchValue}"`;
    }

    clearTimeout(timeOut);

    timeOut = setTimeout(() => {
      //props.callback(searchValue.value);
      searchValueStore.set(searchValue.trim());
      if (callback) callback(searchValue.trim());
    }, 500);
  };

  export { callback };
</script>

<div class="search-bar">
  <form class="search-form">
    <IconOh icon={PrSearch} class="search-icon" />
    <input
      bind:value={searchValue}
      on:input={handleChange}
      type="text"
      class="search-input"
    />
    {#if searchValue.length > 0}
      <IconOh
        icon={MdClose}
        class="search-icon search-close-icon"
        on:click={clearValue}
      />
    {/if}
  </form>
</div>

<style lang="scss">
  .search-bar {
    // background-color: goldenrod;
    width: 100%;
    height: 40px;
    border-radius: 40px;
    overflow: hidden;
    border: 1px solid var(--color-border);
    .search-form {
      display: flex;
      align-items: center;
      height: inherit;

      :global(.search-icon) {
        color: var(--color-icon);
        margin: 0 10px 0 12px;
      }

      :global(.search-close-icon) {
        margin: 0 8px 0 8px;
        cursor: pointer;
      }
      .search-input {
        flex: 1;
        width: 100%;
        height: inherit;
        caret-color: var(--color-primary);
        outline: none;
        border: none;
        background-color: transparent;
      }
    }
  }
</style>
