<script>
  import Image from "svelte-image";

  export let product;
  const { title, thumb, content } = product;
</script>

<style lang="scss">
  @import "../../styles/main.scss";
  .cssgrid {
    border: 1px dashed pink;
    display: grid;
    grid-template-columns: 25% 25% 50%;
    grid-template-rows: repeat(1, 2fr);
  }
</style>

<div class="cssgrid">
  <h3>{product.title}</h3>
  <p>{@html product.content}</p>
  <Image src="{product.thumb}" alt="product {product.title}" />
</div>

<h1>TODH</h1>