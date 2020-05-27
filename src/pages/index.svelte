<script>
    import PageTitle from "../components/PageTitle.svelte";
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .Cover {
      padding: $h1;
      display: grid;
      gap: $h1 $h1;
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: 1fr 2fr 1fr 1fr 2fr;
      > div {
        padding: $h4;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        &:nth-child(1) {
          grid-column: span 5;
          grid-row: span 4;
          background-position: bottom;
          @include media(s2) {
            grid-column: span 7;
            grid-row: span 4;
          }
          @include media(s3) {
            grid-column: span 2;
            grid-row: span 5;
          }
        }
        &:nth-child(2) {
          grid-column: 1/-1;
          @include media(s2) {
            grid-column: span 3;
            grid-row: span 4;
          }
          @include media(s3) {
            grid-column: span 2;
            grid-row: span 5;
          }
        }
        &:nth-child(3) {
          grid-column: span 2;
          grid-row: 1/-2;
          @include media(s2) {
            grid-column: span 2;
            grid-row: span 4;
          }
          @include media(s3) {
            grid-column: span 3;
            grid-row: span 5;
          }
        }
        &:nth-child(4) {
          grid-column: 1/-1;
          @include media(s2) {
            grid-column: span 2;
            grid-row: span 2;
          }
          @include media(s3) {
            grid-column: span 2;
            grid-row: span 5;
          }
        }
        &:nth-child(5) {
          grid-column: 1/-1;
          @include media(s2) {
            grid-column: span 1;
            grid-row: span 2;
          }
          @include media(s3) {
            grid-column: span 3;
            grid-row: span 4;
          }
        }
        &:nth-child(6) {
          grid-column: 1/-1;
          @include media(s2) {
            grid-column: span 1;
            grid-row: span 2;
          }
          @include media(s3) {
            grid-column: span 2;
            grid-row: span 5;
          }
        }
        &:nth-child(7) {
          grid-column: span 7;
          @include media(s2) {
            grid-column: span 1;
            grid-row: span 2;
          }
          @include media(s3) {
            grid-column: span 3;
            grid-row: span 4;
          }
        }
      }
    }
</style>

<svelte:head>
  <title>Index TODH</title>
</svelte:head>

<PageTitle>
  <h1 slot="pagetitle">TODH</h1>
  <h2 slot="subtitle">Artworks, Cosmovision & Fast prototyping</h2>
</PageTitle>

<div class="Cover">
  <div style="background-image: url(img/img1.jpg);"></div>
  <div style="background-image: url(img/img2.jpg);"></div>
  <div style="background-image: url(img/img3.jpg);"></div>
  <div style="background-image: url(img/img4.jpg);"></div>
  <div style="background-image: url(img/img5.jpg);"></div>
  <div style="background-image: url(img/img6.jpg);"></div>
  <div style="background-image: url(img/grafico-2.svg);"></div>
</div>