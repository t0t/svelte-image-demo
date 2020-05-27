<script>
  import Image from "svelte-image";
  import PageTitle from "../components/PageTitle.svelte";
</script>

<style lang="scss">
  @import "../styles/main.scss";

  .cssgrid {
    border: 1px solid blue;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 10em;
    gap: 1em;
    padding: $h1;
  }
</style>

<svelte:head>
  <title>Home TODH</title>
</svelte:head>

<PageTitle>
  <h1 slot="pagetitle">Wellcome</h1>
  <h2 slot="subtitle">Holistic Laboratory</h2>
</PageTitle>

<div class="cssgrid">
  <div>
    <Image src="/img/img1.jpg" alt="n" />
  </div>
  <div>
    <Image src="/img/img2.jpg" alt="n" />
  </div>
  <div>
    <Image src="/img/img3.jpg" alt="n" />
  </div>
  <div>
    <Image src="/img/img4.jpg" alt="n" />
  </div>
  <div>
    <Image src="/img/img5.jpg" alt="n" />
  </div>
  <div>
    <Image src="/img/img6.jpg" alt="n" />
  </div>
</div>