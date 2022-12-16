<script lang="ts">
  import { MdArrowbackRound, HiHome } from "oh-vue-icons/icons";
  import { useNavigate, globalHistory } from "svelte-navigator";
  import Container from "~/components/Wrapper.svelte";
  import Wrapper from "~/components/Wrapper.svelte";
  import Button from "~/components/Button.svelte";
  import IconOh from "~/components/IconOh.svelte";
  import DarkModeButton from "~/components/DarkModeButton.svelte";

  const navigate = useNavigate();

  const handleRedirectPage = (path?: string): void => {
    // if (!name) router.push({ name });
    // else router.back();
    if (!path) {
      navigate(-1);
    } else navigate(path);
  };
</script>

<div class="nav">
  <Container>
    <!-- <Wrapper> -->
    <div class="content">
      <div>
        <Button on:click={() => handleRedirectPage("/")}>
          <IconOh icon={HiHome} />
        </Button>
        <Button on:click={() => handleRedirectPage("/")}>
          <IconOh icon={MdArrowbackRound} />
        </Button>
      </div>
      <div class="content-right">
        <DarkModeButton />
        Tìm kiếm thứ gì đó
      </div>
    </div>
    <!-- </Wrapper> -->
  </Container>
</div>

<style lang="scss">
  .nav {
    border-bottom: 1px solid var(--color-border);
    color: var(--color-text);
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
    }

    .content-right {
      display: flex;
      align-items: center;
      // justify-content: space-between;
      // height: 60px;
    }
  }
</style>
