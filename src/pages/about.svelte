<script>
  import Image from "svelte-image";
  import PageTitle from "../components/PageTitle.svelte";
</script>

<style lang="scss">
  @import "../styles/main.scss";

  .grid {
    padding-top: $h1;
    padding-right: $h4;
    padding-bottom: $h1;
    padding-left: $h4;

    div {
      padding: $h2;
      display: grid;
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
        grid-column: -1 / 1;
        grid-row: span 2;
      }
      &:nth-child(7) {
        color: $white;
        background-color: $black;
      }
    }

    @include media(s1) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax($h6, 1fr));
      grid-auto-flow: row;
      grid-auto-row: minmax($h7, 1fr);
      gap: $h4;
    }

    @include media(s2) {
      grid-template-columns: repeat(auto-fill, minmax(1fr, $h6));
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
      <img src="img/grafico-7.svg" alt="">
  </div>
  <div>
    <h3>
      Todo está embebido
    </h3>
  </div>
  <div>
    <p>Digamos que hay un monton de cosas que son lo mismo formando grupos de cosas que, a su vez están unas dentro de otras.</p>
  </div>
  <div>
    <figure>
      <img src="img/grafico-5.svg" alt="">
      <figcaption>1 + 2 + 3 + 4 = 10 = 1 + 0 = 1</figcaption>
    </figure>
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