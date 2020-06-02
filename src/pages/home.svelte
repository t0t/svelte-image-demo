<script>
  // import Image from "svelte-image";
  import PageTitle from "../components/PageTitle.svelte";
</script>

<style lang="scss">
  @import "../styles/main.scss";

  .Cover {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: $h0;
    grid-auto-rows: auto;
    grid-auto-flow: row dense;
    gap: $h1;
    /* justify-items: center; */
    align-items: center;

    @include media(s3) {
      padding: $h3;
    }

    svg {
      fill: $alpha_black;

      circle,
      path {
        stroke: $alpha_black;
        stroke-width: .5;
      }
    }

    .full-column {
      grid-column: -1/1;
      text-align: center;
    }

    .half-column {
      grid-column: 2 / span 2;
    }

    div {
      text-align: center;
      padding: 0 $h0;
      background-color: $light_grey;
      /* display: flex; */
      justify-content: center;
      align-items: center;

      figure {
        width: 100%;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          /*Alternativa a usar background-image*/
        }
      }

      &:nth-child(1) {

        /* grid-column: span 4; */
        @include media(s2) {}
      }

      &:nth-child(2) {
        @include media(s2) {
          /* background-color: $tertiary; */
        }
      }

      &:nth-child(4) {
        @include media(s2) {
          /* background-color: $alpha_grey; */
          /* grid-column: span ; */
        }

        @include media(s3) {
          /* grid-row: span 2; */
        }
      }

      &:nth-child(5) {

        /* border-color: $black_light; */
        @include media(s3) {
          /* grid-row: span 1; */
        }
      }

      &:nth-child(6) {

        /* background-color: $grey; */
        @include media(s3) {
          /* grid-row: span 1; */
        }
      }

      &:nth-child(7) {
        @include media(s2) {}

        @include media(s3) {
          /* grid-row: span 1; */
        }
      }
    }
  }
</style>

<svelte:head>
  <title>TODH | Playground</title>
</svelte:head>

<PageTitle>
  <h1 slot="pagetitle">TODH Playground</h1>
  <h2 slot="subtitle">Holistic Laboratory</h2>
</PageTitle>

<div class="Cover">

  <div>
    <strong>La Unidad</strong> <br>
    Mar de Nun. Potencial que se actualiza.
  </div>
  <div class="half-column">
    <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 168 168">
      <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.07646 0 0 .07646 -1073.328 -152.287)" />
    </svg>
  </div>
  <div>
    <h3>1 + 2 +3 + 4 = 10 = 1 + 0 = 1</h3>
  </div>

  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 168 168">
      <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.07646 0 0 .07646 -1073.328 -152.287)" />
    </svg>
    1
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
      clip-rule="evenodd" viewBox="0 0 169 169">
      <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.03822 0 0 .03822 -452.1 -33.67)" />
      <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.03822 0 0 .03822 -536 -33.67)" />
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke"
        transform="matrix(.07644 0 0 .07644 -1072.51 -151.74)" />
    </svg>
    2
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
      clip-rule="evenodd" viewBox="0 0 169 169">
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke" stroke-width="26.17"
        transform="matrix(.03822 0 0 .03822 -452.1 -33.668)" />
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke" stroke-width="26.17"
        transform="matrix(.03822 0 0 .03822 -536 -33.668)" />
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke" stroke-width="26.17"
        transform="matrix(.03822 0 0 .03822 -493.61 -33.668)" />
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke" stroke-width="13.08"
        transform="matrix(.07644 0 0 .07644 -1072.51 -151.74)" />
    </svg>
    3
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 169 169">
      <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.0191 0 0 .0191 -225.8 25.37)" />
      <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.0191 0 0 .0191 -141.88 25.37)" />
      <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.0191 0 0 .0191 -267.75 25.37)" />
      <circle cx="15135.5" cy="3089.34" r="1097.64" transform="matrix(.0191 0 0 .0191 -183.76 25.37)" />
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke"
        transform="matrix(.03822 0 0 .03822 -493.93 -33.67)" />
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke"
        transform="matrix(.03822 0 0 .03822 -452.1 -33.67)" />
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke"
        transform="matrix(.03822 0 0 .03822 -536 -33.67)" />
      <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke"
        transform="matrix(.07644 0 0 .07644 -1072.51 -151.74)" />
    </svg>
    4
  </div>

  <div class="full-column">
    <h3>4 etapas/dimensiones constituyen toda Unidad</h3>
  </div>

  <div>punto</div>
  <div>línea</div>
  <div>superficie</div>
  <div>objeto</div>

  <div>pensar</div>
  <div><strong>sentir</strong></div>
  <div>decir</div>
  <div>hacer</div>

  <div>ser</div>
  <div>dualidad</div>
  <div>símbolo</div>
  <div>manifestación</div>

  <div>fuego</div>
  <div>agua</div>
  <div>aire</div>
  <div>tierra</div>

  <div><strong>orden</strong></div>
  <div>incubación</div>
  <div><strong>conexión</strong></div>
  <div><strong>forma</strong></div>

  <div>infancia</div>
  <div>adolescencia</div>
  <div>madurez</div>
  <div>vejez</div>

  <div>idear/definir</div>
  <div>empatizar</div>
  <div>testear</div>
  <div>prototipar</div>

  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>

  <div>
    <strong>La Tetractys Pitagórica</strong> <br>
    Década. Unidad.
  </div>
  <div class="half-column">
    <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 193 169">
      <path fill="none"
        d="M4.054 164.65l30.564-52.938 30.563 52.938H4.054zM65.763 164.65l30.563-52.938 30.562 52.938H65.763zM127.186 164.65l30.563-52.938 30.563 52.938h-61.126zM34.936 111.176L65.5 58.24l30.564 52.936H34.936zM96.442 111.176l30.563-52.936 30.564 52.936H96.442zM65.787 57.84L96.35 4.902l30.562 52.936H65.787z"
        vector-effect="non-scaling-stroke" />
      <circle cx="168.317" cy="18.147" r="6.044" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
      <circle cx="214.102" cy="98.498" r="6.045" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
      <circle cx="259.858" cy="178.241" r="6.045" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
      <circle cx="305.727" cy="257.757" r="6.045" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
      <circle cx="214.102" cy="257.757" r="6.045" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
      <circle cx="123.237" cy="257.757" r="6.044" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
      <circle cx="30.816" cy="257.757" r="6.045" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
      <circle cx="76.892" cy="178.241" r="6.045" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
      <circle cx="168.317" cy="178.241" r="6.045" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
      <circle cx="123.237" cy="98.498" r="6.044" transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
    </svg>
  </div>
  <div>
    <h3>1 + 2 +3 + 4 = 10 = 1 + 0 = 1</h3>
  </div>

</div>