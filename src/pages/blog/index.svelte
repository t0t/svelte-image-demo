<script>
  import Image from "svelte-image";
  import PageTitle from "../../components/PageTitle.svelte";
  import data from "./blog.json";
  const posts = data.posts;

  import {
    url,
    isActive
  } from "@sveltech/routify";
</script>

<style lang="scss">
  @import "../../styles/main.scss";

  .CardGroup {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax($h7, 1fr));
    @include media(s2) {
      grid-template-columns: repeat(auto-fill, minmax($h8, 1fr));
    }
    @include media(s3) {
      grid-template-columns: repeat(auto-fill, minmax($h8, 1fr));
    }
    /* grid-auto-rows: auto; */

    padding: 1px;
    gap: 1px;
    a {
      background-color: $light_grey;
      color: $primary;
    }
    
    a:hover {
      /* color: $light_grey; */
      background-color: $grey;
    }
  }

  .CardItem {
    display: grid;
    grid-template-columns: .5fr 1fr;
    grid-template-rows: 0.3fr;
    gap: $h3;
    grid-template-areas: "CardThumb CardMain";
    border: 1px solid #ccc;
  }

  .CardThumb {
    grid-area: CardThumb;
    /* background-color: $light_grey; */
  }

  .CardMain {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.2fr auto .1fr;
    /* gap: $h3 $h3; */
    grid-template-areas: "CardTitle CardTitle CardTitle""CardContent CardContent CardContent""CardFooter CardFooter CardFooter";
    grid-area: CardMain;
    margin-top: 0;
    padding-right: $h3;
  }

  .CardTitle {
    grid-area: CardTitle;
  }

  .CardContent {
    grid-area: CardContent;
  }

  .CardFooter {
    grid-area: CardFooter;
  }
</style>

<svelte:head>
  <title>Blog TODH</title>
</svelte:head>

<PageTitle>
  <h1 slot="pagetitle">Blog</h1>
  <h2 slot="subtitle">My crazy thoughts</h2>
</PageTitle>

<div class="CardGroup">
  {#each posts as post}
  <a href="blog/{$url(post.slug)}">
    <article class="CardItem">
      <div class="CardThumb">
        <Image src="{post.thumb}" alt="Poster for {post.title}" />
      </div>
      <div class="CardMain">
        <div class="CardTitle">
          <h3>{post.title}</h3>
        </div>
        <div class="CardContent">
          <p>{@html post.excerpt}</p>
        </div>
        <div class="CardFooter"></div>
      </div>
    </article>
  </a>
  {/each}
</div>

  
  