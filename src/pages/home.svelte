<script>
  import Image from "svelte-image";
  import PageTitle from "../components/PageTitle.svelte";
</script>

<style lang="scss">
  @import "../styles/main.scss";

  .Cover {
      display: grid;
      /* padding: $h-1; */
      gap: 1px;
      /* grid-template-columns: minmax(50px, 20%) repeat(3, 1fr); */
      grid-template-columns: repeat(auto-fill, minmax(10rem,1fr));
      grid-template-rows: repeat(4, 1fr);
      /* grid-auto-columns: $h3; */
      grid-auto-rows: 1fr;
      
      > div {
        padding: $h3;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-color: $light_grey;

        &:nth-child(1) {
          background-color: yellow;
          background-position: bottom;
          @include media(s2) {
            /* grid-column: span 1; */
          }
          @include media(s3) {
            grid-column: span 12;
            grid-row: span 2;
          }
        }
        &:nth-child(2) {
          /* grid-column: span 6; */
          @include media(s2) {
          background-color: lightsalmon;
            /* grid-column: span 2; */
          }
          @include media(s3) {
          /* grid-column: span 4; */
            /* grid-row: span 2; */
          }
        }
        &:nth-child(3) {
          background-color: turquoise;
          /* grid-column: span 12; */
          @include media(s2) {
            /* grid-column: span 2; */
          }
          @include media(s3) {
            grid-column: span 4;
            grid-row: span 2;
          }
        }
        &:nth-child(4) {
          @include media(s2) {
            background-color: red;
            grid-column: span ;
          }
          @include media(s3) {
            grid-column: span 4;
            grid-row: span 2;
          }
        }
        &:nth-child(5) {
          border-color: blue;

          @include media(s2) {
  
            /* grid-row: span 2; */
          }
          @include media(s3) {
  
            grid-row: span 1;
          }
        }
        &:nth-child(6) {
          background-color: cornflowerblue;

          @include media(s2) {
  
          }
          @include media(s3) {
  
            grid-row: span 1;
          }
        }
        &:nth-child(7) {

          @include media(s2) {
  
          }
          @include media(s3) {
  
            grid-row: span 1;
          }
        }
      }
    }
</style>

<svelte:head>
  <title>Home TODH</title>
</svelte:head>

<PageTitle>
  <h1 slot="pagetitle">Wellcome</h1>
  <h2 slot="subtitle">Holistic Laboratory</h2>
</PageTitle>

<div class="Cover">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
    <Image src="/img/img1.jpg" alt="n" />
    <Image src="/img/img2.jpg" alt="n" />
    <Image src="/img/img3.jpg" alt="n" />
    <Image src="/img/img4.jpg" alt="n" />
    <Image src="/img/img5.jpg" alt="n" />
    <Image src="/img/img6.jpg" alt="n" />