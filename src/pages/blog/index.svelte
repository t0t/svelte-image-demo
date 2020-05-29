<script>
  // import Image from "svelte-image";
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
    padding: $h1;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    gap: $h1;

    @include media(s2) {
      grid-template-columns: repeat(auto-fill, minmax(20rem,1fr));
    }
    @include media(s3) {
      grid-template-columns: repeat(auto-fill, minmax(30rem,1fr));
    }

    a {
      background-color: $light_grey;
      color: $primary;

      &:nth-child(1) {      }

      &:nth-child(2) {
      }

      &:nth-child(4) {}
    }

    a:hover {
      background-color: $white;
    }
  }

  .CardItem {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding-top: 0;
  }

  .CardThumb {
    padding-left: $h2;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 200px;
  }

  .CardMain {
    padding-top: $h1;
    padding-left: $h1;
    padding-right: $h1;
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
      <div class="CardThumb" style="background-image:url('{post.imagen}');">
        <!-- <img src="{post.thumb}" alt="Poster for {post.title}" /> -->
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

  
  