<script>
    import Image from "svelte-image";
    import PageTitle from "../components/PageTitle.svelte";
</script>

<style lang="scss">
    @import "../styles/main.scss";
</style>

<svelte:head>
  <title>Index TODH</title>
</svelte:head>

<PageTitle>
  <h1 slot="pagetitle">TODH</h1>
  <h2 slot="subtitle">Artworks, Cosmovision & Fast prototyping</h2>
</PageTitle>

<Image src="/img/img3.jpg" alt="n" />
<Image src="/img/grafico-2.svg" alt="n" />