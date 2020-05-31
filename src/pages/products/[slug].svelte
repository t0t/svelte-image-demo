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
        gap: $h3;
        padding: $h2;

        @include media(s2) {
            padding: $h4;
            grid-template-columns: repeat(auto-fit, minmax($h8, 1fr));
            grid-template-rows: 1fr;
            grid-auto-rows: $h6;
        }

        @include media(s3) {
            padding: $h6;
            grid-template-columns: repeat(auto-fit, minmax($h8, 1fr));
            /* grid-template-rows: 1fr; */
            gap: $h6;
        }

        &Article {}

        &Content {
            display: grid;
            background-color: #fff;
            grid-template-columns: repeat(auto-fit, minmax($h6, 1fr));
            grid-template-rows: repeat(2, 1fr);
            /* height: 100%; */
            grid-auto-rows: 300px;
            h3 {
                grid-column: span 2;
                background-color: red;
                width: 100%;
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
            height: $h4;
            display: flex;
            align-items: center;
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
                        {product.title} | 
                        {product.description}
                    </figcaption>
                </figure>
            </article>
            <main class="ProductContent">
                <h3>{@html product.content.h1}</h3>
                <p>{@html product.content.p}</p>
                <blockquote>{@html product.content.blockquote}</blockquote>
                <p>{@html product.content.p2}</p>
                <p>{@html product.content.p3}</p>
                <p>{@html product.content.p4}</p>
                <p>{@html product.content.p5}</p>
                <p>{@html product.content.p6}</p>
                <img src="{product.content.img1}" alt="Imagen">
                <p>{@html product.content.p7}</p>
                <p>{@html product.content.p8}</p>
                <p>{@html product.content.p9}</p>
                <p>{@html product.content.p10}</p>
                <img src="{product.content.img2}" alt="Imagen">
                <p>{@html product.content.p11}</p>
                <p>{@html product.content.p12}</p>
                <p>{@html product.content.p13}</p>
            </main>
        {/if}
  {/each}
</section>