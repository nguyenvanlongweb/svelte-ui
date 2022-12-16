<script lang="ts">
  import { writable, get } from "svelte/store";
  import Container from "~/components/Container.svelte";
  import Wrapper from "~/components/Wrapper.svelte";
  import Nav from "~/components/layouts/Nav.svelte";
  import Footer from "~/components/layouts/Footer.svelte";
  import Overlay from "~/components/layouts/Overlay.svelte";
  import MobileNav from "~/components/layouts/MobileNav.svelte";

  const navMobile = writable(false);
  let closeAnimation = false;
  let openNavMobile = false;

  let navClass = false;

  const handleToggleMenu = (): void => {
    navMobile.set(!get(navMobile));
    navClass = !navClass;
  };

  navMobile.subscribe((value) => {
    if (!value) {
      closeAnimation = true;
      setTimeout(() => {
        closeAnimation = false;
        openNavMobile = false;
      }, 500);
    } else {
      openNavMobile = true;
    }
  });
</script>

<!-- <div>{ 'move-left': navMobile 'close-animation': closeAnimation } -->

<div
  class={`strawberry-layout ${navClass ? "move-left" : ""} ${
    closeAnimation ? "close-animation" : ""
  }`}
>
  <Nav callback={handleToggleMenu} />
  <Container>
    <Wrapper>
      <slot />
    </Wrapper>
    <Footer />
  </Container>
</div>
<!-- class={`nav-mobile ${closeAnimation ? "close-nav-animation" : ""}`} -->

{#if openNavMobile}
  <div>
    <div class="nav-mobile" class:close-nav-animation={closeAnimation}>
      <MobileNav />
    </div>
    <Overlay callback={handleToggleMenu} />
  </div>
{/if}

<style lang="scss">
  .strawberry-layout {
    transform: translateX(0);
    background-color: var(--color-bg);
    min-height: 100vh;
    // animation: startTop cubic-bezier(0.35, 0.25, 0.31, 0.87) 0.5s;
  }

  .nav-mobile {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 200px;
    transform: translateX(200px);
    z-index: 1;
    animation: moveLeftNavIn ease-in-out 0.2s forwards;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      background-color: transparent;
      box-shadow: -10px 0px 100px 10px var(--color-box-shadow-nav);
      animation: showShadow linear 0.2s forwards;
    }
  }

  .move-left {
    animation: moveLeftIn ease-in-out 0.2s forwards;
    transform: translateX(-200px);
  }

  .close-animation {
    animation: moveLeftOut ease-in-out 0.2s;
  }

  .close-nav-animation {
    animation: moveLeftNavOut ease-in-out 0.2s;

    &::before {
      animation: hideShadow ease-in-out 0.2s forwards;
    }
  }

  @keyframes moveLeftOut {
    0% {
      transform: translateX(-200px);
      scale: 80%;
    }
    100% {
      transform: translateX(0);
      scale: 100%;
    }
  }

  @keyframes moveLeftIn {
    0% {
      transform: translateX(0);
      scale: 100%;
    }
    100% {
      transform: translateX(-200px);
      scale: 80%;
    }
  }

  @keyframes moveLeftNavIn {
    0% {
      transform: translateX(200px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes moveLeftNavOut {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(200px);
    }
  }

  @keyframes showShadow {
    0% {
      box-shadow: -10px 0px 100px 10px transparent;
    }
    100% {
      box-shadow: -10px 0px 100px 10px var(--color-box-shadow-nav);
    }
  }

  @keyframes hideShadow {
    0% {
      box-shadow: -10px 0px 100px 10px var(--color-box-shadow-nav);
    }
    100% {
      box-shadow: -10px 0px 100px 10px transparent;
    }
  }
</style>
