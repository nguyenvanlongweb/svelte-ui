<script lang="ts">
  import Wrapper from "~/components/Wrapper.svelte";

  const data: Date = new Date();
  const year: number = data.getFullYear();
</script>

<footer class="footer">
  <Wrapper>
    Copyright &copy; {year} |
    <span class="domain">Nguyenvanlongwebit.com</span>
  </Wrapper>
</footer>

<style lang="scss">
  .footer {
    background: var(--color-bg-footer);
    text-align: center;
    padding: 20px 0;
    // .wrapper {
    //   max-width: 1280px;
    //   // height: 50px;
    //   margin: 0 auto;
    //   padding: 0 1.5rem;
    // }

    .domain {
      color: var(--color-primary);
      font-weight: 600;
    }
  }
</style>
