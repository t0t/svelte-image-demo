<script>
  import Image from "svelte-image";
  import PageTitle from "../components/PageTitle.svelte";
</script>

<style lang="scss">
  @import "../styles/main.scss";

  .grid {
    display: grid;
    padding-left: $h0;
    padding-right: $h0;
    gap: $h0;
    svg {
      fill: $alpha_black;
      circle {
        stroke: $alpha_black;
        stroke-width: 1;
      }
      path {}
    }
    
    @include media(s2){
      padding-top: $h1;
      padding-right: $h1;
      padding-bottom: $h1;
      padding-left: $h1;
    }

    div {
      text-align: center;
      justify-items: center;
      align-items: center;
      /* border: 1px solid $white; */
      figure {
        width: 100%;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover; /*Alternativa a usar background-image*/
        }
      }

      &:nth-child(1) {
        grid-column: span 4;
        @include media(s3) {
          grid-column: 1;
        }
      }
      &:nth-child(9) {
        grid-column: -1 / 1;
        /* color: $white; */
        /* background-color: $black; */
      }
    }

    @include media(s1) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax($h6, 1fr));
      grid-auto-flow: row;
      grid-auto-row: minmax($h7, 1fr);
      /* gap: $h4; */
    }

    @include media(s2) {
      /* background-color: green; */
      grid-template-columns: repeat(4, 1fr);
    }
    
    @include media(s3) {
      grid-template-columns: repeat(auto-fill, minmax($h7, 1fr));
    }
    @include media(s4) {
      grid-template-columns: repeat(auto-fill, minmax($h8, 1fr));
    }
  }
</style>

<svelte:head>
  <title>About TODH</title>
</svelte:head>

<PageTitle>
  <h1 slot="pagetitle">T-O-D-H</h1>
  <h2 slot="subtitle">Un modo de percepción holístico</h2>
</PageTitle>

<div class="grid">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 169 169">
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke" transform="matrix(.07644 0 0 .07644 -1072.51 -151.74)"/>
    </svg>
    cero
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 168 168">
      <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.07646 0 0 .07646 -1073.328 -152.287)"/>
    </svg>
    uno
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 169 169">
      <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.03822 0 0 .03822 -452.1 -33.67)"/>
      <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.03822 0 0 .03822 -536 -33.67)"/>
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke" transform="matrix(.07644 0 0 .07644 -1072.51 -151.74)"/>
    </svg>
    dos
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 169 169">
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke" stroke-width="26.17" transform="matrix(.03822 0 0 .03822 -452.1 -33.668)"/>
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke" stroke-width="26.17" transform="matrix(.03822 0 0 .03822 -536 -33.668)"/>
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke" stroke-width="26.17" transform="matrix(.03822 0 0 .03822 -493.61 -33.668)"/>
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke" stroke-width="13.08" transform="matrix(.07644 0 0 .07644 -1072.51 -151.74)"/>
    </svg>
    tres
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 169 169">
      <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.0191 0 0 .0191 -225.8 25.62)"/>
      <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.0191 0 0 .0191 -141.65 25.11)"/>
      <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.0191 0 0 .0191 -267.75 25.62)"/>
      <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.0191 0 0 .0191 -184.18 25.11)"/>
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke" transform="matrix(.03822 0 0 .03822 -493.93 -33.67)"/>
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke" transform="matrix(.03822 0 0 .03822 -452.1 -33.67)"/>
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke" transform="matrix(.03822 0 0 .03822 -536 -33.67)"/>
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke" transform="matrix(.07644 0 0 .07644 -1072.51 -151.74)"/>
    </svg>
    cuatro
  </div>
  <div>
    <h3>
      Todo está embebido
    </h3>
  </div>
  <div>
    Digamos que hay un monton de cosas que son lo mismo formando grupos de cosas que, a su vez están unas dentro de otras.
  </div>
  <div>
    Coherencia holística
  </div>
  <div>
    <figure>
      <img src="img/grafico-8.svg" alt="">
      <figcaption>1 + 2 + 3 + 4 = 10 = 1 + 0 = 1</figcaption>
    </figure>
  </div>
  <div>
    <p>La raíz profunda de la Creación es el orden y sentirlo nos reconecta dando forma a la conexión de todo cuanto existe.</p>
    <small>TODH</small>
  </div>
  <div>
    Sentir la creación que ya eres
  </div>
  <div>
    <figure>
      <img src="img/img0.jpg" alt="">
      <figcaption>Ondas, Frecuencia vibración</figcaption>
    </figure>
  </div>
  <div>
    <h3>El símbolo, la analogía, la medida, la proporción...</h3>
  </div>
  <div>
    <h3>Todo según el número</h3>
  </div>
  <div>
    Sentir Orden Forma conexión
  </div>
  <div>
    <figure>
      <img src="img/grafico-3.svg" alt="">
      <figcaption>1 + 2 + 3 + 4 = 10 = 1 + 0 = 1</figcaption>
    </figure>
  </div>
  <div>
    <h3>
      Orden
    </h3>
  </div>
  <div>
    El molde original.
  </div>
  <div>
    <h3>
      Todo ya existe
    </h3>
  </div>
</div>