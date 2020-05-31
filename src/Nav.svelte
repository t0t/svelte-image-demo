<script>
  import {
    url,
    isActive
  } from "@sveltech/routify";

  const links = [
    ["./home", "home"],
    ["./about", "TODH"],
    ["./blog", "Blog"],
    ["./products", "Artwork"],
  ];
</script>

<style lang="scss">
  @import "styles/main.scss";

  .MainNav {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: 1fr;
    justify-content: space-between;
    background-color: $light_grey;
    /* padding-right: $h3; */
    /* gap: $h0; */
  }

  .MainNav li {
    /* border: 1px dashed gray; */
  }
  .MainNav li a {
    padding-top: $h0;
    padding-right: $h0;
    padding-bottom: $h0;
    padding-left: $h0;
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