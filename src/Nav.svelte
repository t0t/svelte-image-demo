<script>
  import { url, isActive } from "@sveltech/routify";

  const links = [
    ["./home", "home"],
    ["./about", "about"],
    ["./blog", "blog"],
    ["./products", "products"],
  ];
</script>

<style lang="scss">
  @import "styles/main.scss";
  
  .MainNav {
    display: flex;
    justify-content: space-around;
    
    @include media(s2) {
      display: grid;
      justify-items: center;
      align-items: center;
      grid-template-columns: repeat(4, 1fr);
      gap: $h2;
      padding: 0 $h2;
    }
  }

  .MainNav li a {
      color: $primary;
      padding-top: $h0;
      padding-right: $h1;
      padding-bottom: $h0;
      padding-left: $h1;
      &.selected {
        color: $white;
        background-color: $primary;
      }
  }
</style>

<ul class="MainNav">
  {#each links as [path, name]}
  <li>
    <a href="{$url(path)}" class:selected="{$isActive(path)}">{name}</a>
  </li>
  {/each}
</ul>
