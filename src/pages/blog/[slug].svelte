<script>
    // import Image from "svelte-image";
    // import { onMount } from 'svelte';
    import {
        url
    } from "@sveltech/routify";
    export let slug;
    import data from "./blog.json";
    const posts = data.posts;
    let content = data.posts.content;
</script>

<style lang="scss">
    @import "../../styles/main.scss";

    .Post {
        padding: $h2;
        /* background-color: $tertiary; */
        padding-top: $h5;
        
        @include media(s2) {
            padding: $h3;
            padding-top: $h5;
        }
        &Article h3 {
            text-align: center;
        }

        &Content {
            gap: $h3;

            h3 {
                text-align: inherit;
                margin-bottom: $h3;
            }

            img {
                margin-bottom: $h2;
            }

            @include media(s2) {
                margin-left: auto;
                margin-right: auto;
                margin-top: $h5;
                max-width: 65%;
                border: 1px solid $alpha_grey;
                padding: $h3;
            }
        }

        &Header {
            text-align: center;
        }

        &ImgContainer {
            width: 100%;
            overflow: hidden;
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
                <h3>
                    {@html post.subtitle}
                </h3>
                <div class="PostImgContainer">
                    <img src="/{post.imagen}" alt="{post.title}"/>
                </div>
                <div class="PostContent">
                    <h3>{@html post.content.h1}</h3>
                    <p>{@html post.content.p}</p>
                    <blockquote>{@html post.content.blockquote}</blockquote>
                    <p>{@html post.content.p2}</p>
                    <p>{@html post.content.p3}</p>
                    <p>{@html post.content.p4}</p>
                    <p>{@html post.content.p5}</p>
                    <p>{@html post.content.p6}</p>
                    <img src="/{post.content.img1}" alt="Imagen">
                    <p>{@html post.content.p7}</p>
                    <p>{@html post.content.p8}</p>
                    <p>{@html post.content.p9}</p>
                    <p>{@html post.content.p10}</p>
                    <img src="/{post.content.img2}" alt="Imagen">
                    <p>{@html post.content.p11}</p>
                    <p>{@html post.content.p12}</p>
                    <p>{@html post.content.p13}</p>
                </div>
            </article>
        {/if}
    {/each}
</section>