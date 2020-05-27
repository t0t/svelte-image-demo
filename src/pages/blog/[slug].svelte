<script>
    import { url } from "@sveltech/routify";
    export let slug;
    import data from "./blog.json";
    const posts = data.posts;
</script>
<style lang="scss">
    @import "../../styles/main.scss";
</style>
{#each posts as post}
    {#if (post.slug === slug)}
        <h1>{post.title}</h1>
        <img src="/{post.imagen}" alt="{post.title}">
        <p>{@html post.content}</p>
    {/if}
{/each}

<a href={$url(`${slug}/delete`)}>Delete</a>
