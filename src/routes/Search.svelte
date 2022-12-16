<script lang="ts">
  import * as sn from "svelte-navigator";
  import SearchBar from "~/components/SearchBar.svelte";

  let searchValue: string = "";

  const handleInput = (value: string): void => {
    searchValue = value;
  };

  console.log(sn);
</script>

<div>this is search page</div>
<SearchBar callback={handleInput} />
<h2>{searchValue}</h2>
