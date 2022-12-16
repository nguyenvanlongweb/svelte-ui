<script lang="ts">
  import { Link, useNavigate } from "svelte-navigator";
  import {
    MdArrowbackRound,
    PrSearch,
    HiSolidMenuAlt3,
  } from "oh-vue-icons/icons";
  import Container from "~/components/Container.svelte";
  import Wrapper from "~/components/Wrapper.svelte";
  import Image from "~/components/Image.svelte";
  import images from "~/assets/img";
  import Button from "~/components/Button.svelte";
  import IconOh from "~/components/IconOh.svelte";
  import DarkModeButton from "~/components/DarkModeButton.svelte";

  const navigate = useNavigate();
  let callback: Function = null;

  const handleRedirect = (path: string): void => {
    navigate(path);
  };

  const handleMenuMobile = (): void => {
    if (callback) {
      callback();
    }
  };

  export { callback };
</script>

<div class="nav">
  <Container>
    <Wrapper>
      <div class="container">
        <div class="content-left">
          <Link to="/" class="link">
            <Image src={images.logo} alt="logo" />
          </Link>
          <Button on:click={() => handleRedirect("search")}>
            <IconOh icon={MdArrowbackRound} />
          </Button>
        </div>
        <div class="content-right">
          <Button on:click={() => handleRedirect("search")}>
            <IconOh icon={PrSearch} />
          </Button>
          <DarkModeButton />
          <Button on:click={handleMenuMobile}>
            <IconOh icon={HiSolidMenuAlt3} />
          </Button>
        </div>
      </div>
    </Wrapper>
  </Container>
</div>

<style lang="scss">
  .nav {
    border-bottom: 1px solid var(--color-border);
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
    }

    .content-left {
      align-items: center;
      display: inline-flex;
      // .link {
      // :global(.logo)
      :global(.link) {
        padding: 4px 0;
        margin-right: 4px;
        height: 50px;
      }
    }
    .content-right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: right;
    }
  }
</style>
