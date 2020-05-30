<script>
  import data from "./products.json";
  // import Product from "./Product.svelte";
  // import Image from "svelte-image";
  import PageTitle from "../../components/PageTitle.svelte";
  const products = data.products;

  import {
    url,
    isActive
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
    }
  }
  .Cards {
    background-color: $tertiary;
    @include media(s2) {
      padding: $h4;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-auto-rows: 400px;
      grid-gap: $h4;
    }
    &Item {
      /* overflow: hidden; */
      &Caption {
        height: $h4;
        display: flex;
        align-items: center;
        a {
          width: 100%;
          color: $primary;
          &:hover {
            color: $secondary;
          }
        }
        
      }
      &:nth-child(1) {
        grid-column: span 2;
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
      &:nth-child(7) {
        /* background-color: blue; */
        grid-column: 1/span 2;
        grid-row: span 2;
      }
      &:nth-child(7) {
        /* background-color: green; */
        grid-column: span 2;
        grid-row: span 2;
      }
      &:nth-child(10) {
        /* background-color: yellow; */
        grid-row: span 2;
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
  <h1 slot="pagetitle">I make things</h1>
  <h2 slot="subtitle">Sample artwork gallery</h2>
</PageTitle>

<section class="Cards">
  {#each products as product}
    <div class="CardsItem">
      <figure class="CardImage">
        <img src="{product.imagen}" alt="product {product.title}" />
        <figcaption class="CardsItemCaption">
          <a href="products/{$url(product.slug)}">
            <h4 class="CardTitle"> {product.title} </h4>
            {@html product.description}
          </a>
        </figcaption>
      </figure>
    </div>
  {/each}
</section>