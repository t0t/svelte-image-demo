<script>
  import PageTitle from "../components/PageTitle.svelte";

  import {
    fade
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
</style>

<svelte:head>
  <title>Index TODH</title>
</svelte:head>

<PageTitle 
    pageTitle="Sergio Forés"
    pageSubTitle="Visión holística y artefactos en torno a la Creación 👋"
/>
<div class="Main__content">
  <div class="">
    <button on:click="{prev}" disabled="{step < 1}">&lt;</button>
    <button on:click="{next}" disabled="{step > 3}">&gt;</button>

    <em>{ step } / 4</em>
  </div>

  <div class="">
    {#if step == 0}
    <div class="GridItem" in:fade="{{x: inX}}" out:fade="{{x: outX}}">
      <Step0/>
    </div>
    {:else if step == 1}
    <div class="GridItem" in:fade="{{x: inX}}" out:fade="{{x: outX}}">
      <Step1/>
    </div>
    {:else if step == 2}
    <div class="GridItem" in:fade="{{x: inX}}" out:fade="{{x: outX}}">
      <Step2/>
    </div>
    {:else if step == 3}
    <div class="GridItem" in:fade="{{x: inX}}" out:fade="{{x: outX}}">
      <Step3/>
    </div>
    {:else if step == 4}
    <div class="GridItem" in:fade="{{x: inX}}" out:fade="{{x: outX}}">
      <Step4/>
    </div>
    {/if}

  </div>
</div>