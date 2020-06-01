<script>
  // import Image from "svelte-image";
  import PageTitle from "../components/PageTitle.svelte";
</script>

<style lang="scss">
  @import "../styles/main.scss";

  .Cover {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax($h8, 1fr));
      grid-auto-rows: 1fr;
      @include media(s2) {
      }      
      > div {
        padding: $h3;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-color: $light_grey;
        display: flex;
        justify-content: center;
        align-items: center;

        figure {
          width: 100%;
        }

        &:nth-child(1) {
          grid-column: -1/1;
          @include media(s2) {
          }
        }
        &:nth-child(2) {
          @include media(s2) {
          background-color: $tertiary;
          }
        }
        &:nth-child(4) {
          @include media(s2) {
            background-color: $alpha_grey;
            grid-column: span ;
          }
          @include media(s3) {
            grid-row: span 2;
          }
        }
        &:nth-child(5) {
          border-color: $black_light;
          @include media(s3) {
  
            grid-row: span 1;
          }
        }
        &:nth-child(6) {
          background-color: $grey;
          @include media(s3) {
            grid-row: span 1;
          }
        }
        &:nth-child(7) {
          @include media(s2) {}
          @include media(s3) {
            grid-row: span 1;
          }
        }
      }
    }
</style>

<svelte:head>
  <title>TODH | Playground</title>
</svelte:head>

<PageTitle>
  <h1 slot="pagetitle">Playground</h1>
  <h2 slot="subtitle">Holistic Laboratory</h2>
</PageTitle>

<div class="Cover">
  <div>
    <figure>
      <img src="img/grafico-7.svg" alt="">
      <figcaption>wFWQFQw</figcaption>
    </figure>  
  </div>
  <div></div>
  <div></div>
  <div>Holistic</div>
  <div></div>
  <div></div>
  <div></div>
  <div>Art</div>
  <div></div>
  <div>Design</div>
  <div></div>
  <div></div>
  <div></div>
  <div>TODH</div>
  <div></div>
  <div></div>
</div>