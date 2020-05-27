<script>
  import data from "./products.json";
  import Product from "./Product.svelte";
  import PageTitle from "../../components/PageTitle.svelte";
  const products = data.products;

  import { url, isActive } from "@sveltech/routify";
</script>

<style lang="scss">
  @import "../../styles/main.scss";

  .cssgrid {
    padding: $h2;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: $h2;
    
    @include media(s2) {
        padding: $h3;
        grid-gap: $h3;
        grid-template-columns: repeat(2, 1fr);
    }
    @include media(s3) {
        grid-template-columns: repeat(3, 1fr);
    }
    @include media(s4) {
        grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

<svelte:head>
  <title>Products TODH</title>
</svelte:head>

<PageTitle>
  <h1 slot="pagetitle">I make things</h1>
  <h2 slot="subtitle">Sample artwork gallery</h2>
</PageTitle>

<section class="cssgrid">
  {#each products as product}
  <Product {product}>
    <button slot="button">
      <!-- <span class:selected={$isActive(product.slug)}> -->
      <span class="CardButton">
        <a href="products/{$url(product.slug)}">{product.title}</a>
      </span>
    </button>
  </Product>
  {/each}
</section>
