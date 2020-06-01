<script>
    import PageTitle from "../components/PageTitle.svelte";
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .Cover {
      @include media(s2) {
        grid-auto-rows: $h6;
        display: grid;
        gap: $h6;
        grid-template-columns: repeat(2, 1fr);
        padding-left: $h6;
        padding-right: $h6;
        padding-bottom: $h5;
        /* color: $white; */
      }
      
      > div {
        text-align: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        display: grid;
        justify-content: center;
        align-items: center;

        &:nth-child(1) {
          background-position: bottom;
          @include media(s2) {
            grid-column: span 2;
            grid-row: span 2;
          }
          /* @include media(s3) {
            grid-column: span 12;
            grid-row: span 2;
          } */
        }
        &:nth-child(2) {
          @include media(s2) {
            grid-row: span 2;
          }
        }
        &:nth-child(3) {
          background-color: hotpink;
        }
        &:nth-child(10) {
          /* grid-column: 1/-1; */
          @include media(s2) {
            /* grid-column: span 2; */
            grid-row: span 2;
          }
          @include media(s3) {
          }
        }
      }
    }
</style>

<svelte:head>
  <title>Index TODH</title>
</svelte:head>

<PageTitle>
  <h1 slot="pagetitle">TODH Lab. - Prototype v.1</h1>
  <h2 slot="subtitle">Svelte, CSS Grid</h2>
</PageTitle>

<div class="Cover">
  <div style="background-image: url(img/grafico-2.svg);"></div>
  <div>
      <h3>Items se organizan creando estructuras y sistemas que interactúan entre ellos</h3>
  </div>
  <div style="background-image: url(img/img0.jpg);"></div>
  <div style="background-image: url(img/img2.jpg);"></div>
  <div style="background-image: url(img/img3.jpg);"></div>
  <div>
      <h3>Todo es lo mismo en esencia</h3>
  </div>
  <div style="background-image: url(img/img4.jpg);"></div>
  <div style="background-image: url(img/img5.jpg);"></div>
  <div>
      <h3>Maquetación artesanal de prototipos</h3>
  </div>
  <div style="background-image: url(img/img6.jpg);"></div>
</div>