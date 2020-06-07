<script>
  import {
    url,
    isActive
  } from "@sveltech/routify";

  const links = [
    ["./about", "TODH"],
    ["./blog", "Blog"],
    ["./products", "Artefactos"],
  ];
</script>

<style lang="scss">
  @import "styles/main.scss";

  .MainNav {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: $h4;
    grid-auto-flow: row;
    grid-auto-rows: 1fr;
    padding-right: $h0;
  }

  .MainNav li {
    font-weight: bold;
  }
  .MainNav li a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $grey;
    &:hover {
      color: $black;
    }

    &.selected {
      color: $black;
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