<script>
    import Image from "svelte-image";
    import { url } from "@sveltech/routify";
    export let slug;
    import data from "./blog.json";
    const posts = data.posts;
</script>

<style lang="scss">
    @import "../../styles/main.scss";
    .Post {
        padding: $h3;
        display: grid; 
        grid-template-columns: repeat(2, 1fr); 
        /* grid-auto-rows: 100px;  */

        &Article {
            grid-column-start: 1; 
            grid-column-end: 4; 
            grid-row-start: 1; 
            grid-row-end: 3;
        }
        &Content {
            grid-column-start: 1; 
            grid-row-start: 3; 
            grid-row-end: 5; 
        }
        &Header {
            text-align: center;
        }
        &ImgContainer {
            width: 100%;
            height: 50vh;
            overflow: hidden;
            /* background-color: red; */
        }
    }
</style>

<section class="Post">
    {#each posts as post}
        {#if (post.slug === slug)}
            <article class="PostArticle">
                <h1 class="PostHeader">
                    {post.title}
                </h1>
                <div class="PostImgContainer">
                    <Image src="/{post.imagen}" alt="{post.title}"/>
                </div>
                <p class="PostContent">
                    {@html post.content}
                </p>
            </article>
        {/if}
    {/each}
</section>

<!-- <a href={$url(`${slug}/delete`)}>Delete</a> -->
