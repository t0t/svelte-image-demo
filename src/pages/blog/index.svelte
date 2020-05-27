<script>
  import PageTitle from "../../components/PageTitle.svelte";
  import data from "./blog.json";
  import Post from "./Post.svelte";
  const posts = data.posts;

  import {
    url,
    isActive
  } from "@sveltech/routify";
</script>

<style lang="scss">
  @import "../../styles/main.scss";

  .cssgrid {
    padding: $h1;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 3fr);
    grid-auto-rows: auto;
    gap: $h1;
  }
</style>

<svelte:head>
  <title>Blog TODH</title>
</svelte:head>

<PageTitle>
  <h1 slot="pagetitle">Blog</h1>
  <h2 slot="subtitle">My crazy thoughts</h2>
</PageTitle>

<section class="cssgrid">
  {#each posts as post}
  <Post {post}>
    <button slot="buttonpost">
      <span class:selected="{$isActive(post.slug)}">
        <a href="blog/{$url(post.slug)}">{post.title}</a>
      </span>
    </button>
  </Post>
  {/each}
</section>