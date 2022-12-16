<script lang="ts">
  import { HiSun, HiMoon } from "oh-vue-icons/icons";
  import Button from "~/components/Button.svelte";
  import IconOh from "~/components/IconOh.svelte";
  import * as darkMode from "~/utils/darkmode";
  import { screenWidth, darkStore, get } from "~/stores";

  darkStore.set(darkMode.mode === "dark");
  let isDark: boolean = darkMode.mode === "dark";
  let iconComponent: typeof HiSun = isDark ? HiSun : HiMoon;
  let animationOut: boolean = false;
  let animationIn: boolean = false;
  let showText: boolean = get(screenWidth) > 768;

  const handleChangeDarkMode = (): void => {
    darkMode.switchTheme(!isDark);
    darkStore.set(!isDark);
    isDark = !isDark;
  };

  screenWidth.subscribe((value: number) => {
    showText = value > 768;
  });

  darkStore.subscribe((value: boolean) => {
    const icon: typeof HiSun = value ? HiSun : HiMoon;

    animationIn = false;
    animationOut = true;
    setTimeout(() => {
      iconComponent = icon;
      animationIn = true;
      animationOut = false;
      setTimeout(() => {
        animationIn = false;
      }, 400);
    }, 400);
  });
</script>

<div class="wrapper">
  <!-- <div v-if="screenWidth > 768"> -->
  {#if showText}
    <div>
      <span>{isDark ? "Tối" : "Sáng"}</span>
    </div>
  {/if}
  <Button on:click={handleChangeDarkMode}>
    <div
      class="wrapper-icon"
      class:icon-in={animationIn}
      class:icon-out={animationOut}
    >
      <IconOh icon={iconComponent} />
    </div>
  </Button>
</div>

<style lang="scss">
  .wrapper {
    display: inline-flex;
    align-items: center;
  }

  .wrapper-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .icon-out {
    animation: darkMode-out ease-in-out 0.4s forwards;
  }

  .icon-in {
    animation: darkMode-in ease-in-out 0.4s forwards;
  }

  @keyframes darkMode-out {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes darkMode-in {
    0% {
      transform: translateX(-10px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
