<script>
  import data from "./products.json";
  const products = data.products;
  import Content from "../../components/Content.svelte";
  import ContentArea from "../../components/ContentArea.svelte";
  import Area from "../../components/Area.svelte";
  import PageTitle from "../../components/PageTitle.svelte";
  import Cards from "../../components/Cards.svelte";
  import Card from "../../components/Card.svelte";

  import {
    url,
  } from "@sveltech/routify";
</script>

<style lang="scss">
  @import "../../styles/main.scss";
</style>

<svelte:head>
  <title>Products TODH</title>
</svelte:head>

<PageTitle 
    pageTitle="Coagulando la vibración"
    pageSubTitle="Sergio Forés"
/>

<Content>
  <ContentArea>

    <Area>
      <Cards>
        {#each products as product}
        <a href="/products/{$url(product.slug)}">
          <Card 
          title={product.title}
          description={product.description}
          image={product.imagen}
          variante={3}
          />
        </a>
        {/each}
      </Cards>
    </Area>

  </ContentArea>
</Content>

