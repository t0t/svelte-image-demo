<script>
    import PageTitle from "../components/PageTitle.svelte";
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .Cover {
      display: grid;
      padding: $h1;
      gap: $h1 $h1;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 2fr 1fr 1fr 1fr;
      grid-auto-rows: 1fr;
      
      > div {
        text-align: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        &:nth-child(1) {
          grid-column: span 12;
          background-position: bottom;
          @include media(s2) {
            grid-column: span 6;
          }
          @include media(s3) {
            grid-column: span 12;
            grid-row: span 2;
          }
        }
        &:nth-child(2) {
          grid-column: span 6;
          @include media(s2) {
            grid-column: span 6;
          }
          @include media(s3) {
          grid-column: span 4;
            grid-row: span 2;
          }
        }
        &:nth-child(3) {
          grid-column: span 6;
          @include media(s2) {
            grid-column: span 6;
          }
          @include media(s3) {
            grid-column: span 4;
            grid-row: span 2;
          }
        }
        &:nth-child(4) {
          grid-column: 1/-1;
          @include media(s2) {
            grid-column: span 6;
          }
          @include media(s3) {
            grid-column: span 4;
            grid-row: span 2;
          }
        }
        &:nth-child(5) {
          border-color: blue;
          grid-column: 1/-1;
          @include media(s2) {
            grid-column: span 6;
            /* grid-row: span 2; */
          }
          @include media(s3) {
            grid-column: span 4;
            grid-row: span 1;
          }
        }
        &:nth-child(6) {
          border-color: yellow;
          grid-column: 1/-1;
          @include media(s2) {
            grid-column: span 6;
          }
          @include media(s3) {
            grid-column: span 4;
            grid-row: span 1;
          }
        }
        &:nth-child(7) {
          grid-column: 1/-1;
          @include media(s2) {
            grid-column: span 6;
          }
          @include media(s3) {
            grid-column: span 4;
            grid-row: span 1;
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
  <div style="background-image: url(img/img0.jpg);"></div>
  <div style="background-image: url(img/img2.jpg);"></div>
  <div style="background-image: url(img/img3.jpg);"></div>
  <div>
      <h2>Todo es lo mismo en esencia</h2>
  </div>
  <div style="background-image: url(img/img4.jpg);"></div>
  <div style="background-image: url(img/img5.jpg);"></div>
  <div>
      <p>Maquetación artesanal de prototipos</p>
  </div>
  <div style="background-image: url(img/img6.jpg);"></div>
  <div>
      <p>Items interactúan y se organizan creando estructuras y sistemas que interactúan entre ellos</p>
  </div>
  <div style="background-image: url(img/grafico-2.svg);"></div>
</div>