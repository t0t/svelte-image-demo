<script>
  import {
    url,
    isActive
  } from "@sveltech/routify";

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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: flex-end;
text-align: right;
    /* padding-right: $h3; */
    /* gap: $h0; */
  }

  .MainNav li a {
    /* border: 1px solid black; */
    /* width: 100%; */
    padding-top: $h0;
    padding-right: $h1;
    padding-bottom: $h0;
    padding-left: $h1;
    color: $primary;

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