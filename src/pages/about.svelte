<script>
    import Image from "svelte-image";
    import PageTitle from "../components/PageTitle.svelte";
</script>

<style lang="scss">
  @import "../styles/main.scss";
  .grid {
    @include media(s1) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax($h6, 1fr));
    }
    @include media(s2) {
      grid-template-columns: repeat(auto-fill, minmax($h7, 1fr));
    }
    @include media(s3) {
      grid-template-columns: repeat(auto-fill, minmax($h8, 1fr));
    }
    /* grid-auto-rows: auto; */
    gap: 1em;
    padding: $h1;
  }
</style>

<svelte:head>
  <title>About TODH</title>
</svelte:head>

<PageTitle>
    <h1 slot="pagetitle">Sergio Forés</h1>
    <h2 slot="subtitle">Artworks, Cosmovision & Fast prototyping</h2>
</PageTitle>

<div class="grid">
    <div>
      <Image src="/img/img1.jpg" alt="n" />
      <h5>title</h5>
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