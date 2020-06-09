<script>
  // import Image from "svelte-image";
  // import Prism from "../components/PrismJS.svelte";
  import {
    fade
  } from 'svelte/transition';
  // import { flip } from 'svelte/animate';
  import data from "../data/libros.json";
  const libros = data.libros;
  import listaConceptos from "../data/conceptos.json";
  let conceptos = listaConceptos.conceptos;
  import {
    Tabs,
    TabList,
    TabPanel,
    Tab
  } from '../components/tabs.js';
  import PageTitle from '../components/PageTitle.svelte';
  import BlockQuote from '../components/BlockQuote.svelte';
  import Banner from '../components/Banner.svelte';
  import List from '../components/List.svelte';
  import IconCero from '../components/icons/IconCero.svelte';
  import IconUno from '../components/icons/IconUno.svelte';
  import IconDos from '../components/icons/IconDos.svelte';
  import IconTres from '../components/icons/IconTres.svelte';
  import IconCuatro from '../components/icons/IconCuatro.svelte';
  import IconEspiral from '../components/icons/IconEspiral.svelte';
  import IconTetractys from '../components/icons/IconTetractys.svelte';

  let visible = true;
  let cualidades = {
    uno: [
      'mónada',
      'punto',
      'pensar',
      'ser',
      'fuego',
      'orden',
      'discernir',
      'nigredo',
    ],
    dos: [
      'díada',
      'línea',
      'sentir',
      'dualidad',
      'agua',
      'incubación',
      'empatizar',
      'albedo',
    ],
    tres: [
      'tríada',
      'superficie',
      'decir',
      'símbolo',
      'aire',
      'conexión',
      'testear',
      'citrinitas',
    ],
    cuatro: [
      'tétrada',
      'objeto',
      'hacer',
      'manifestación',
      'tierra',
      'forma',
      'prototipar',
      'rubedo',
    ],
  }

  let count = 0;

  let increment = () => {
    if (count < cualidades.uno.length - 1) {
      count++
    } else {
      count = 0;
    }
  };
</script>

<style lang="scss">
  @import "../styles/main.scss";
</style>

<svelte:head>
  <title>TODH | Playground</title>
</svelte:head>

<PageTitle 
    pageTitle="El proceso de la Creación"
    pageSubTitle="Matriz/modelo/prototipo base de cualquier cosa."
/>

<div class="Grid GridHome">

  <div class="Grid GridItem GridArticle">
    <p>
      <strong>Espacio</strong>
      <br />
      cosmogénesis: El mar de Nun. Campo de posibilidades. Incognoscible.
      Potencial que se actualiza...
    </p>
    <div class="GridItemHalfRow">
      <IconCero />
    </div>
    <div>
      <h3>0</h3>
    </div>
    <div class="GridItemFullRow">
      <h3>La Unidad y sus dimensiones</h3>
    </div>
    <div>
      <h3>1</h3>
      <IconUno />
      <h4>{cualidades.uno[count]}</h4>
    </div>
    <div>
      <h3>2</h3>
      <IconDos />
      <h4>{cualidades.dos[count]}</h4>
    </div>
    <div>
      <h3>3</h3>
      <IconTres />
      <h4>{cualidades.tres[count]}</h4>
    </div>
    <div>
      <h3>4</h3>
      <IconCuatro />
      <h4>{cualidades.cuatro[count]}</h4>
    </div>

    <div class="cualidades_btn">
      <button on:click={increment}>
        Cambia el contenido, no el contenedor
      </button>
    </div>
    <div>
      <strong>La Tetractys Pitagórica</strong>
      <br />
      Década. Unidad.
    </div>
    <div class="GridItemHalfRow">
      <IconTetractys />
    </div>
    <div>
      <h3>
        0
        <br />
        + 1 + 2 + 3 + 4 = 10 = 1 + 0 = 1
      </h3>
    </div>
  </div>

  <Banner>
    <figure slot="image">
      <IconEspiral />
    </figure>
    <BlockQuote quote={"La raíz profunda de la Creación es el orden y sentirlo nos reconecta con todo lo que existe."}
      author={"TODH"} />
  </Banner>

  <article class="GridItem GridArticle">
    <h3 class="GridArticleTitle">Una lógica de la observación</h3>
    <p>
      La base de lo que es TODH, para mí queda sobradamente explicada
      contemplando la Tetractys, la vesica Piscis o el número-idea Pitagórico.
      Es un contemplar dejándose penetrar por lo que se observa. Un rendirse ante la evidencia. Es mirar hasta que ves,
      nada más. Es una escucha atenta. Todo lo que hay es agua, fuego, tierra, aire y un quinto elemento... No són sólo
      elementos naturales, son principios abstractos,
      hechos de una sustancia que se encuentra en nuestras ideas, nuestras
      formas de ser, hay fuego en las ideas, agua en las emociones, tierra en los hechos, y aire en nuestros discursos.
      <strong>
        Antes es la espiral que el caracol. El caracol es la expresión de un principio anterior.
      </strong>
      Conforme vas cayendo en lo que la esencia de las cosas es, te van
      importando cada vez menos las formas y más las relaciones. Mi ánimo es el de transmitir esta vivencia profunda y
      no tanto perseguir una base teórica intelectual. Mucho se ha escrito ya por gente de talla muy superior a la mía,
      de modo que me parecería absurdo tratar de llenar más páginas al respecto.
    </p>
    <BlockQuote quote={"Un viaje que es de regreso a la Unidad."} author={"TODH"} />
    <p>
      Recalcar la naturaleza sintética de este proyecto que apunta siempre al origen, a lo original, a lo obvio. Un
      viaje que es de regreso a la Unidad.
      Una incursión. El símbolo tiene ese poder, condensa un vasto campo de significados y los disuelve quedándose con
      lo esencial.
    </p>
    <p>
      Me gusta comparar TODH con el juego del Tetris cuyo objetivo es
      desintegrar los objetos que van cayendo. El jugador no añade más cosas al
      escenario, simplemente reconoce unas formas que aparecen sobre un fondo y
      comprende cual es su orden. Nada más. Los objetos aparecen y desaparecen
      por sí mismos, tú no los creas, sólo los ves y reconoces cual es su sitio.
      No inventas nada, no añades nada. TODH es simplemente orden "elemental".
    </p>
  </article>

  <article class="GridItem GridArticle">
    <h3 class="GridArticleTitle">Términos clave</h3>
    
    <List>
      {#each conceptos as item}
      <li>
        <p><strong>{item.title} </strong>{@html item.text}
          <a href="{item.href}" target="{item.target}"><small>{item.link}</small></a></p>
        </li>
        {/each}
      </List>
      
    </article>
    
<article class="GridItem GridArticle">
  <h3 class="GridArticleTitle">Documentación</h3>
    <Tabs>
      <TabList>
        <Tab>fuentes antiguas</Tab>
        <Tab>libros</Tab>
        <Tab>videos</Tab>
        <Tab>varios</Tab>
      </TabList>

    <TabPanel>
      <ul>
        <li>Cosmogénesis babilónica</li>
        <li>Cosmogénesis egipcia</li>
        <li>Escuela Pitagórica</li>
        <li>Hermetismo</li>
        <li>Astrología Humanista</li>
        <li>Filosofía presocrática</li>
      </ul>
    </TabPanel>

    <TabPanel>
      <List>
        {#each libros as item}
        <li><a href="{item.href}" target="{item.target}">{item.link}</a></li>
        {/each}
      </List>
    </TabPanel>

    <TabPanel>
      <ul transition:fade>
        <li>
          <a href="https://www.youtube.com/watch?v=kIWu5KxEGVs" target="_blank">
            La creatividad es un proceso universal: Jaime Buhigas at TEDxRetiro
          </a>
        </li>
      </ul>
    </TabPanel>
    <TabPanel>
      <ul transition:fade>
        <li>
          <a href="http://www.wikilogica.org.es/wikilogica/index.php/L%C3%B3gica_Global_Convergente" target="_blank">
            Lógica global convergente
          </a>
        </li>
      </ul>
    </TabPanel>
  </Tabs>
</article>

  <Banner index={1}>
    <figure slot="image">
      <IconCuatro />
    </figure>
    <BlockQuote quote={"La creatividad es un proceso universal"} author={"Jaime Buhigas"} />
  </Banner>

</div>