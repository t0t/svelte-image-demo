<script>
  import data from "./products.json";
  // import Product from "./Product.svelte";
  // import Image from "svelte-image";
  import PageTitle from "../../components/PageTitle.svelte";
  const products = data.products;

  import {
    url,
  } from "@sveltech/routify";
</script>

<style lang="scss">
  @import "../../styles/main.scss";

  .CardImage {
    height: 100%;

    img {
      width: 100%;
      height: calc(100% - #{$h4});
      object-fit: cover;
      /*Alternativa a usar background-image*/
      mix-blend-mode: luminosity;

      &:hover {
        mix-blend-mode: inherit;
      }
    }
  }

  .Cards {
    /* background-color: $tertiary; */
    padding: $h0;
    grid-gap: $h0;

    @include media(s1) {
      display: grid;
      padding: $h1;
      grid-gap: $h1;
    }

    @include media(s2) {
      padding: $h3;
      grid-template-columns: repeat(auto-fit, minmax($h7, 1fr));
      grid-auto-rows: 15em;
      grid-gap: $h3;
      /* background-color: white; */
    }

    @include media(s3) {
      padding: $h4;
      grid-template-columns: repeat(auto-fit, minmax($h7, 1fr));
      grid-auto-rows: 20em;
      grid-gap: $h4;
    }

    &Item {

      a {
        width: 100%;
        color: $grey;

        &:hover {
          color: $blue;
          background-color: $alpha_black;
        }
      }
      /* overflow: hidden; */
      &Caption {
        height: $h4;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: start;
      }

      &:nth-child(1) {
        grid-row: span 1;
      }

      &:nth-child(2) {
        grid-row: span 2;
      }

      &:nth-child(3) {
        /* grid-row: span 1; */
      }

      &:nth-child(4) {
        /* background-color: blue; */
        /* grid-column: 1;
        grid-row: span 2; */
      }

      &:nth-child(6) {
        /* background-color: blue; */
        grid-row: span 2;
      }

      &:nth-child(7) {
        /* background-color: green; */
        grid-row: span 2;
      }

      &:nth-child(10) {
        grid-row: span 2;
      }

      &:nth-child(13) {
        grid-column: span 2;
      }
    }
  }
</style>

<svelte:head>
  <title>Products TODH</title>
</svelte:head>

<PageTitle>
  <h1 slot="pagetitle">Coagulando la vibración</h1>
  <h2 slot="subtitle">Sergio Forés</h2>
</PageTitle>

<section class="Cards">
  {#each products as product}
    <div class="CardsItem">
      <a href="/products/{$url(product.slug)}">
      <figure class="CardImage">
        <img src="/{product.imagen}" alt="product {product.title}" />
        <figcaption class="CardsItemCaption">
            <h4 class="CardTitle"> {product.title} </h4>
            {@html product.description}
          </figcaption>
        </figure>
      </a>
    </div>
  {/each}
</section>