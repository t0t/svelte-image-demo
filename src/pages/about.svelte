<script>
    import Image from "svelte-image";
    import PageTitle from "../components/PageTitle.svelte";
</script>

<style lang="scss">
  @import "../styles/main.scss";
  .cssgrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-auto-rows: auto; */
    gap: 1em;
    padding: $h1;
  }
</style>

<svelte:head>
  <title>About TODH</title>
</svelte:head>

<PageTitle>
    <h1 slot="pagetitle">About</h1>
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