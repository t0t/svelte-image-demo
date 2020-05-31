<script>
  import {
    url,
    isActive
  } from "@sveltech/routify";

  const links = [
    ["./home", "lab."],
    ["./about", "TODH"],
    ["./blog", "Blog"],
    ["./products", "Artwork"],
  ];
</script>

<style lang="scss">
  @import "styles/main.scss";

  .MainNav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-flow: row;
    grid-auto-rows: 1fr;
    /* align-items: stretch; */
  }

  .MainNav li {
    font-weight: bold;
  }
  .MainNav li a {
    height: 100%;
    /* width: $h5; */
    display: flex;
    align-items: center;
    /* border: 1px solid $light_grey; */
    justify-content: center;
    /* background-color: $alpha_grey; */
    color: $black;
    &:hover {
      color: $white;
    }

    &.selected {
      color: $white;
      background-color: $black;
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