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
      object-fit: cover; /*Alternativa a usar background-image*/
      mix-blend-mode: luminosity;
      &:hover {
        mix-blend-mode: luminosity;
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
      padding: $h5;
      grid-template-columns: repeat(auto-fit, minmax($h7, 1fr));
      grid-auto-rows: 20em;
      grid-gap: $h5;
    }
    &Item {
      /* overflow: hidden; */
      &Caption {
        height: $h4;
        display: flex;
        align-items: center;
        a {
          width: 100%;
          color: $alpha_black;
          &:hover {
            color: $quaternary;
            background-color: $alpha_black;
          }
        }
        
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

    @include media(s1) {
      /* padding: $h3; */
      /* grid-gap: $h3;
      grid-template-columns: repeat(2, 1fr); */
    }

    /* @include media(s2) {
        padding: $h3;
        grid-gap: $h3;
        grid-template-columns: repeat(2, 1fr);
    }
    @include media(s3) {
        grid-template-columns: repeat(3, 1fr);
    }
    @include media(s4) {
        grid-template-columns: repeat(4, 1fr);
    } */
  }
</style>

<svelte:head>
  <title>Products TODH</title>
</svelte:head>

<PageTitle>
  <h1 slot="pagetitle">Coagulando la energía</h1>
  <h2 slot="subtitle">Sergio Forés</h2>
</PageTitle>

<section class="Cards">
  {#each products as product}
    <div class="CardsItem">
      <figure class="CardImage">
        <img src="/{product.imagen}" alt="product {product.title}" />
        <figcaption class="CardsItemCaption">
          <a href="/products/{$url(product.slug)}">
            <h4 class="CardTitle"> {product.title} </h4>
            {@html product.description}
          </a>
        </figcaption>
      </figure>
    </div>
  {/each}
</section>