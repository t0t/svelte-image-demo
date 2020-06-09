<script>
  // import Image from "svelte-image";
  import PageTitle from "../../components/PageTitle.svelte";
  import data from "./blog.json";
  const posts = data.posts;

  import {
    url,
    isActive
  } from "@sveltech/routify";

  import { Swipe, SwipeItem } from "svelte-swipe";
  let autoplay = false;
  let delay = 2000; //ms
  let showIndicators = false;
  let transitionDuration = 1000; //ms
  let defaultIndex = 0; //start from 0
</script>

<style lang="scss">
  @import "../../styles/main.scss";
  .swipe-holder{
    height: 30vh;
    width: 100%;
  }
  .CardGroup {
    padding-left: $h0;
    padding-right: $h0;

    @include media(s1) {
      display: grid;
      padding-left: $h2;
      padding-right: $h2;
      padding-bottom: $h3;
      gap: $h3;
    }

    @include media(s2) {
      grid-template-columns: repeat(autofill, minmax(400px, 1fr));
      padding-left: $h4;
      padding-right: $h4;
      padding-bottom: $h4;
      gap: 0 $h3;
      /* grid-auto-rows: 1fr; */
    }

    @include media(s3) {
      grid-template-columns: repeat(auto-fill, minmax($h8, 1fr));
    }

    .CardItem {
      color: inherit;
      display: block;
      height: 100%;

      a:hover {
        background-color: $white;
      }

      img {
        width: 100%;
        height: 100%;
        /* height: calc(100% - #{$h4}); */
        object-fit: cover;
      }
    }
  }

  img {
    width: 100%;
    height: calc(100% - #{$h4});
    object-fit: cover;
    /*Alternativa a usar background-image*/
  }
</style>

<svelte:head>
  <title>Blog TODH</title>
</svelte:head>

<PageTitle 
    pageTitle="Blog"
    pageSubTitle="My crazy thoughts"
/>

<div class="swipe-holder">
  <Swipe {showIndicators} {autoplay} {delay} {transitionDuration} {defaultIndex}>
    <SwipeItem>
      <img src="/img/img0.jpg" alt="">
    </SwipeItem>

    <SwipeItem>
      <img src="/img/img2.jpg" alt="">
    </SwipeItem>

    <SwipeItem>
      <img src="/img/img3.jpg" alt="">
    </SwipeItem>

    <SwipeItem>
      <img src="/img/img4.jpg" alt="">
    </SwipeItem>
  </Swipe>
</div>

<div class="CardGroup">
  {#each posts as post}
  <a class="CardItem" href="blog/{$url(post.slug)}">
    <figure>
      <img src="{post.imagen}" alt="Poster for {post.title}" />
      <figcaption>
        <h3>{post.title}</h3>
        <p>{@html post.excerpt}</p>
      </figcaption>
    </figure>
  </a>
  {/each}
</div>

  
  