<script>
  import Image from "svelte-image";
  export let post;
  const { title, thumb, content } = post;
</script>

<style lang="scss">
@import "../../styles/main.scss";
  .cssgrid {
    padding: $h1;
    border: 1px dashed pink;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $h1;
  }
</style>

<div class="cssgrid">
  <h3>{post.title}</h3>
  <p>{@html post.content}</p>
  <Image src="{post.thumb}" alt="Poster for {post.title}" />
  <slot name="buttonpost"></slot>
</div>
