<script>
    // import Image from "svelte-image";
    import {
        url
    } from "@sveltech/routify";
    export let slug;
    import data from "./products.json";
    const products = data.products;
</script>

<style lang="scss">
    @import "../../styles/main.scss";

    .Product {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap: $h3;
        padding: $h2;
        grid-auto-flow: row;

        @include media(s2) {
            padding: $h4;
            grid-template-columns: repeat(auto-fit, minmax($h8, 1fr));
            grid-template-rows: 1fr;
        }

        @include media(s3) {
            padding: $h6;
            grid-template-columns: repeat(auto-fit, minmax($h8, 1fr));
            gap: $h6;
        }

        &Article {}

        &Content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-auto-flow: row;
            gap: $h3;
            /* height: 500px; */
            h3 {
                grid-column: span 2;
                /* width: 100%; */
            }
            p {
                grid-column: span 2;
            }
        }

        &Header {
            text-align: center;
        }

        &ImgContainer {
            width: 100%;
            overflow: hidden;
        }

        &ImgCaption {
            margin-top: $h2;
            display: flex;
            align-items: start;
            flex-direction: column;
        }
    }
</style>

<section class="Product">
    {#each products as product}
        {#if (product.slug === slug)}
            <article class="ProductArticle">
                <figure class="ProductImgContainer">
                    <img src="/{product.imagen}" alt="{product.title}"/>
                    <figcaption class="ProductImgCaption">
                        <strong>{product.title}</strong> 
                        <em>{product.description}</em>
                    </figcaption>
                </figure>
            </article>
            <main class="ProductContent">
                <h3>{@html product.content.h1}</h3>
                <p>{@html product.content.p}</p>
                <img src="{product.content.img1}" alt="Imagen">
                <img src="{product.content.img2}" alt="Imagen">
            </main>
        {/if}
  {/each}
</section>