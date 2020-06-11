<script>
  import {
    fade
  } from 'svelte/transition';
  const fetchImage = (async () => {
    const url = "/test.json";
    const response = await fetch(url);
    return await response.json();
  })();
  import PageTitle from "../components/PageTitle.svelte";
  import Content from "../components/Content.svelte";
  import ContentArea from "../components/ContentArea.svelte";
  import Area from "../components/Area.svelte";
  import Banner from '../components/Banner.svelte';
  import Loading from "../components/Loading.svelte";
  import BlockQuote from "../components/BlockQuote.svelte";
  import Button from "../components/Button.svelte";
  import Cards from "../components/Cards.svelte";
  import Card from "../components/Card.svelte";
  import IconEspiral from "../components/icons/IconEspiral.svelte";
  import IconCuatro from '../components/icons/IconCuatro.svelte';
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

<PageTitle pageTitle="T O D H" pageSubTitle="Visión holística y artefactos en torno a la Creación 👋" />

<Content>
  <ContentArea>
    
    <Area>
      <div class="Content__nav">
        <button on:click="{prev}" disabled="{step < 1}">&lt;</button>
        <button on:click="{next}" disabled="{step > 3}">&gt;</button>
        <em>{ step } / 4</em>
      </div>
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
    </Area>

    <Banner index={0}>
      Banner (inverted variant) with simple text inside
    </Banner>

    <Banner index={1}>
      Banner with simple text inside
    </Banner>

    <Area title="Fetching Json data from service">
    {#await fetchImage}
      <Loading/>
      {:then data}
      <Cards>                
        {#each data.demo as demo}
        <Card 
          title={demo.title} 
          description={demo.description}
          image={demo.img}
        />
        {/each}
      </Cards>
      {:catch error}
        <p>An error occurred!</p>
      {/await}
      </Area>

      <Banner index={0}>
        <BlockQuote quote="This is a blockquote" author="Author" />
        <IconEspiral />
      </Banner>

  </ContentArea>

</Content>