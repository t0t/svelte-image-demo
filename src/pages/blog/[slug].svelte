<script>
    // import Image from "svelte-image";
    // import { onMount } from 'svelte';
    import { url } from "@sveltech/routify";
    export let slug;
    import data from "./blog.json";
    const posts = data.posts;
    let content = data.posts.content;
    console.log(posts);
    console.log(slug);
    console.log(content);

	// let photos = [];

	// onMount(async () => {
	// 	const res = await fetch(`./blog.json`);
	// 	photos = await res.json();
	// });
    // console.log(photos);
</script>

<style lang="scss">
    @import "../../styles/main.scss";
    .PostArticle .p {
        color: pink;
    }
    .Post {
        padding: $h3;
        /* display: grid; 
        grid-template-columns: repeat(4, 1fr); 
        grid-auto-rows: $h7;  */
        background-color: $tertiary;

        &Article {
            h3 {
                text-align: center;
            }
        }
        &Content {
            h3 {
                text-align: inherit;
                margin-bottom: $h3;
            }
            img {
                margin-bottom: $h2;
            }
            @include media(s2) {
                /* display: flex; */
                /* flex-wrasp: wrap; */
                margin-left: auto;
                margin-right: auto;
                margin-top: $h5;
                max-width: 65%;
                /* justify-content: space-arround; */
                border: 1px solid $alpha_grey;
                padding: $h3;
            }
            @include media(s3) {
                /* grid-template-columns: minmax($h6, $h8) 1fr; */
                /* grid-template-columns: repeat(auto-fill, minmax($h9, 1fr)); */
                /* justify-items: center; */
            }
            @include media(s4) {
                /* grid-template-columns: repeat(auto-fill, minmax($h10, 1fr)); */
            }
            gap: $h3;
        }
        &Header {
            text-align: center;
        }
        &ImgContainer {
            width: 100%;
            /* height: 50vh; */
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
                    <img src="{post.content.img1}" alt="Imagen">
                    <p>{@html post.content.p7}</p>
                    <p>{@html post.content.p8}</p>
                    <p>{@html post.content.p9}</p>
                    <p>{@html post.content.p10}</p>
                    <img src="{post.content.img2}" alt="Imagen">
                    <p>{@html post.content.p11}</p>
                    <p>{@html post.content.p12}</p>
                    <p>{@html post.content.p13}</p>
                </div>
            </article>
        {/if}
    {/each}
</section>

<!-- <a href={$url(`${slug}/delete`)}>Delete</a> -->
