<script>
    // import Image from "svelte-image";
    import {
        url,
        isActive
    } from "@sveltech/routify";
    export let slug;
    import data from "./products.json";
    const products = data.products;
    let cur = 0;
    function changeSlide(slide) {
		cur = slide;
	}
    console.log(products.slug);
</script>

<style lang="scss">
    @import "../../styles/main.scss";

    .Product {
        padding: $h2;
        /* border: 1px solid white; */

        @include media(s2) {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax($h7, 1fr));
            gap: $h3;
            padding: $h4;
            grid-auto-flow: row;
            /* grid-auto-rows: 300px; */
        }
        
        @include media(s3) {
            /* background-color: red; */
            padding: $h6;
            grid-template-columns: repeat(auto-fit, minmax($h8, 1fr));
            gap: $h6 $h4;
        }
        
        &Article {
            grid-column: span 2;
            @include media(s2) {
                /* background-color: green; */
                grid-column: inherit;
            }
        }
        
        &Content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: .5fr;
            grid-auto-flow: row;
            gap: $h2;
            /* background-color: red; */
            /* height: 500px; */
            h3 {
                grid-column: span 2;
                /* width: 100%; */
            }
            p {
                grid-column: span 2;
            }
            img {
                grid-column: span 2;
                @include media(s2) {
                    grid-column: inherit;
                }
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
        &Nav {
            grid-column: span 2;
            padding-top: $h2;
            padding-bottom: $h2;
            @include media(s0) {
            }
            justify-items: center;
            img {
                width: $h3;
                border-radius: 50%;
                height: $h3;
                mix-blend-mode: overlay;
            }
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax($h3, 1fr));
            grid-auto-rows: $h2;
            gap: $h2;
            max-width: $h10;
        }
    }
    .selected {
        padding: 20px;
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
                <img src="{product.content.img1}" alt="Detalle de {product.title}">
                <img src="{product.content.img2}" alt="Detalle de {product.title}">
            </main>
        {/if}
    {/each}
    <nav class="ProductNav">
        {#each products as product}
            <a href="{product.slug}" class:selected="{$isActive(product.thumb)}">
                <img src="/{product.thumb}" alt="">
            </a>
        {/each}
    </nav>
</section>