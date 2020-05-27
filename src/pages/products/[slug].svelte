<script>
    import Image from "svelte-image";
    import { url } from "@sveltech/routify";
    export let slug;
    import data from "./products.json";
    const products = data.products;
</script>

<style lang="scss">
  @import "../../styles/main.scss";
  .Product {
      padding: $h3;
      display: grid; 
      grid-template-columns: repeat(2, 1fr); 
      /* grid-auto-rows: 100px;  */

      &Article {
          grid-column-start: 1; 
          grid-column-end: 4; 
          grid-row-start: 1; 
          grid-row-end: 3;
      }
      &Content {
          grid-column-start: 1; 
          grid-row-start: 3; 
          grid-row-end: 5; 
      }
      &Header {
          text-align: center;
      }
      &ImgContainer {
          width: 100%;
          height: 200px;
          overflow: hidden;
          background-color: red;
      }
  }
</style>

<section class="Product">
  {#each products as product}
      {#if (product.slug === slug)}
          <article class="ProductArticle">
              <h1 class="ProductHeader">
                  {product.title}
              </h1>
              <div class="ProductImgContainer">
                  <Image src="/{product.imagen}" alt="{product.title}"/>
              </div>
              <p class="ProductContent">
                  {@html product.content}
              </p>
          </article>
      {/if}
  {/each}
</section>

<!-- <a href={$url(`${slug}/delete`)}>Delete</a> -->
