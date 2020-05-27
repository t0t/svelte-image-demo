<script>
  import data from "./blog.json";
  import Post from "./Post.svelte";
  const posts = data.posts;

  import { url, isActive } from "@sveltech/routify";
</script>
<style lang="scss">
  @import "../../styles/main.scss";
  .cssgrid {
    padding: $h1;
    border: 1px solid green;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 3fr);
    grid-auto-rows: auto;
    gap: $h1;
  }
</style>

<h1>Blog page</h1>

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
