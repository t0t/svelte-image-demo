<script>
  import Image from "svelte-image";
  export let product;
  const { title, thumb, content } = product;
</script>

<style lang="scss">
  @import "../../styles/main.scss";
  .Card {
    /* border: 1px solid $alpha_grey; */
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: .8fr .2fr .3fr .2fr;
    justify-items: center;
    align-items: center;
    /* grid-auto-rows: 200px; */
    /* grid-template-columns: repeat(1, 100%); */

    &Image {
      width: 100%;
      background-color: $light_grey;
      align-self: stretch;
    }
    &Title {
      /* grid-column: 3/3; */
    }
    &Button {
      align-self: stretch;
      /* paddingw: 30px; */
    }
    &Caption {
      /* align-self: stretch; */
      padding: 0 $h2;
    }
  }
</style>

<div class="Card">
  <div class="CardImage">
    <Image src="{product.thumb}" alt="product {product.title}" />
  </div>
  <h3 class="CardTitle">{product.title}</h3>
  <p class="CardCaption">{@html product.content}</p>
  <slot name="button"></slot>
  <slot></slot>
</div>