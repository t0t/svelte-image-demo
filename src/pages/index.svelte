<script>
  import PageTitle from "../components/PageTitle.svelte";
  //   let code_sample = `
  //   @include media(s1) {
  //     display: grid;
  //     grid-auto-rows: auto;
  //     grid-auto-flow: row dense;
  //     gap: $h3 $h2;
  //     grid-template-columns: repeat(auto-fill, minmax($h5, 1fr));
  //     /* background-color: $secondary; */
  //   }
  // `;
  import {
    fly
  } from 'svelte/transition';
  import Step0 from '../components/Step0.svelte';
  import Step1 from '../components/Step1.svelte';
  import Step2 from '../components/Step2.svelte';
  import Step3 from '../components/Step3.svelte';
  import Step4 from '../components/Step4.svelte';

  let step = 0;
  let inX = 1000;
  let outX = -1000;

  function prev() {
    inX = -1000;
    outX = 1000;
    step = step - 1;
  }

  function next() {
    inX = 1000;
    outX = -1000;
    step = step + 1;
  }
</script>

<style lang="scss">
  @import "../styles/main.scss";
  
  .step {
    /* width: 100%; */
    /* height: 50vh; */
  }
  
  .Cover {
    position: relative;
    @include media(s2) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: auto;
      gap: $h1;
      padding: $h1;
      /* padding-left: $h6;
      padding-right: $h6;
      padding-bottom: $h5; */
      /* color: $white; */
    }

    >div {
      text-align: center;
      /* display: grid; */
      /* justify-content: center;
      align-items: center; */

      &:nth-child(1) {
        grid-column: -1/1;
        padding: $h3;
        border: 1px solid $black;
        /* background-color: red; */
        @include media(s2) {
          /* grid-column: span 2;
          grid-row: span 2; */
        }

        /* @include media(s3) {
            grid-column: span 12;
            grid-row: span 2;
          } */
      }

      &:nth-child(2) {
        @include media(s2) {
          grid-row: -1/1;
        }
      }

      &:nth-child(3) {}

      &:nth-child(10) {

        /* grid-column: 1/-1; */
        @include media(s2) {
          /* grid-column: span 2; */
        }

        @include media(s3) {}
      }
    }
  }
</style>

<svelte:head>
  <title>Index TODH</title>
</svelte:head>

<PageTitle>
  <h1 slot="pagetitle">TODH</h1>
  <h2 slot="subtitle">Matriz y proceso de la Creación (de cualquier cosa)</h2>
</PageTitle>


<div class="Cover">

  {#if step == 0}
	<div class="step" in:fly="{{x: inX}}" out:fly="{{x: outX}}">
		<Step0/>
	</div>
	{:else if step == 1}
	<div class="step" in:fly="{{x: inX}}" out:fly="{{x: outX}}">
		<Step1/>
	</div>
	{:else if step == 2}
	<div class="step" in:fly="{{x: inX}}" out:fly="{{x: outX}}">
		<Step2/>
	</div>
	{:else if step == 3}
	<div class="step" in:fly="{{x: inX}}" out:fly="{{x: outX}}">
		<Step3/>
	</div>
	{:else if step == 4}
	<div class="step" in:fly="{{x: inX}}" out:fly="{{x: outX}}">
		<Step4/>
	</div>
  {/if}
  <button on:click="{prev}" disabled="{step < 1}">Prev</button>
    <button on:click="{next}" disabled="{step > 3}">Next</button>

    Dimensión {step} de 0 + 4


  <div>
    <img src="img/grafico-2.svg" alt="">
  </div>
  <div>
    <h3>Items se organizan creando estructuras y sistemas que interactúan entre ellos</h3>
  </div>
  <div>
    <img src="img/img0.jpg" alt="">
  </div>
  <div>
    <img src="img/img2.jpg" alt="">
  </div>
  <div>
    <img src="img/img3.jpg" alt="">
  </div>
  <div>
    <h3>Todo es lo mismo en esencia</h3>
  </div>
  <div>
    <img src="img/img4.jpg" alt="">
  </div>
  <div>
    <img src="img/img5.jpg" alt="">
  </div>
  <div>
    <h3>Maquetación artesanal de prototipos</h3>
  </div>
  <div>
    <img src="img/img6.jpg" alt="">
  </div>
</div>