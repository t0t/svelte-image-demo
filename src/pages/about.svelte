<script>
  // import Image from "svelte-image";
  import { Tabs, TabList, TabPanel, Tab } from '../components/tabs.js'
  import PageTitle from '../components/PageTitle.svelte'
  import IconUno from '../components/icons/IconUno.svelte'
  import IconDos from '../components/icons/IconDos.svelte'
  import IconTres from '../components/icons/IconTres.svelte'
  import IconCuatro from '../components/icons/IconCuatro.svelte'
  // import Prism from "../components/PrismJS.svelte";
  import { fade } from 'svelte/transition'
  let visible = true
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

  let count = 0

  const incrementUno = () => {
    if (count < cualidades.uno.length - 1) {
      count++
    }
  }
  const incrementDos = () => {
    if (count < cualidades.dos.length - 1) {
      count++
      console.log(count)
    }
  }
  const incrementTres = () => {
    if (count < cualidades.tres.length - 1) {
      count++
      console.log(count)
    }
  }
  const incrementCuatro = () => {
    count === 0
    if (count < cualidades.cuatro.length - 1) {
      count++
      console.log(count)
    }
  }
</script>

<style lang="scss">
  @import '../styles/main';
</style>

<svelte:head>
  <title>TODH | Playground</title>
</svelte:head>

<PageTitle>
  <h1 slot="pagetitle">El proceso de la Creación</h1>
  <h2 slot="subtitle">Matriz/modelo/prototipo base de cualquier cosa.</h2>
</PageTitle>

<div class="Grid GridHome">

  <div class="Grid GridItem GridArticle">
    <p>
      <strong>Espacio</strong>
      <br />
      cosmogénesis: El mar de Nun. Campo de posibilidades. Incognoscible.
      Potencial que se actualiza...
    </p>
    <div class="GridItemHalfRow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 168 168">
        <circle
          cx="15135.5"
          cy="3089.34"
          r="1097.64"
          transform="matrix(.07646 0 0 .07646 -1073.328 -152.287)" />
      </svg>
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
      <h4 on:click={incrementUno} transition:fade>{cualidades.uno[count]}</h4>
    </div>
    <div>
      <h3>2</h3>
      <IconDos />
      <h4 on:click={incrementDos}>{cualidades.dos[count]}</h4>
    </div>
    <div>
      <h3>3</h3>
      <IconTres />
      <h4 on:click={incrementTres}>{cualidades.tres[count]}</h4>
    </div>
    <div>
      <h3>4</h3>
      <IconCuatro />
      <h4>{cualidades.cuatro[count]}</h4>
    </div>

    <div class="cualidades_btn">
      <button on:click={incrementCuatro}>
        Cambia el contenido, no el contenedor
      </button>
    </div>
    <div>
      <strong>La Tetractys Pitagórica</strong>
      <br />
      Década. Unidad.
    </div>
    <div class="GridItemHalfRow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 193 169">
        <path
          fill="none"
          d="M4.054 164.65l30.564-52.938 30.563 52.938H4.054zM65.763
          164.65l30.563-52.938 30.562 52.938H65.763zM127.186
          164.65l30.563-52.938 30.563 52.938h-61.126zM34.936 111.176L65.5
          58.24l30.564 52.936H34.936zM96.442 111.176l30.563-52.936 30.564
          52.936H96.442zM65.787 57.84L96.35 4.902l30.562 52.936H65.787z"
          vector-effect="non-scaling-stroke" />
        <circle
          cx="168.317"
          cy="18.147"
          r="6.044"
          transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
        <circle
          cx="214.102"
          cy="98.498"
          r="6.045"
          transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
        <circle
          cx="259.858"
          cy="178.241"
          r="6.045"
          transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
        <circle
          cx="305.727"
          cy="257.757"
          r="6.045"
          transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
        <circle
          cx="214.102"
          cy="257.757"
          r="6.045"
          transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
        <circle
          cx="123.237"
          cy="257.757"
          r="6.044"
          transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
        <circle
          cx="30.816"
          cy="257.757"
          r="6.045"
          transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
        <circle
          cx="76.892"
          cy="178.241"
          r="6.045"
          transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
        <circle
          cx="168.317"
          cy="178.241"
          r="6.045"
          transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
        <circle
          cx="123.237"
          cy="98.498"
          r="6.044"
          transform="matrix(.67024 0 0 .67024 -16.6 -8.11)" />
      </svg>
    </div>
    <div>
      <h3>
        0
        <br />
        + 1 + 2 + 3 + 4 = 10 = 1 + 0 = 1
      </h3>
    </div>
  </div>

  <div class="Banner BannerBlack">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      stroke-linejoin="round"
      clip-rule="evenodd"
      viewBox="0 0 384 247">
      <path
        fill="none"
        stroke="#ff3b05"
        stroke-dasharray="8.3 8.3"
        stroke-dashoffset="1.87"
        stroke-width=".9705592000000001"
        d="M238.42 113.958L26.696 211.404M60.396 110.54l102.31 103.458" />
      <path
        fill="none"
        vector-effect="non-scaling-stroke"
        d="M136.483 135.962c-9.786-3.27-20.483-1.824-28.77 3.88-8.317
        5.694-13.197 14.975-13.172 24.92M94.541 164.762c.027 6.18 3.097 12.017
        8.23 15.753 5.141 3.706 11.77 4.84 17.805 3.056M120.576
        183.57c3.745-1.084 6.664-3.874 7.868-7.48
        1.205-3.607.54-7.56-1.79-10.71M94.096 9.677l288.649 208.564M382.745
        218.24l-356.049-6.836M26.696 211.404l67.4-201.727M94.096 9.677l68.61
        204.32M162.706 213.998L94.54 164.762M136.483 135.962l-15.907
        47.609M126.654 165.38l-32.113-.618M114.388 165.152l6.188 18.419M126.654
        165.38l-9.908 6.801M118.182 167.884l-1.436 4.297M136.483 135.962L26.696
        211.404M120.544 169.58l-6.156-4.428M114.388 165.152c-.88 1.17-1.1
        2.666-.661 4.067a4.828 4.828 0 003.02 2.962" />
      <path
        fill="none"
        vector-effect="non-scaling-stroke"
        d="M126.654 165.38c-1.421-1.904-3.71-3.087-6.137-3.13-2.425-.044-4.706
        1.042-6.13 2.902M120.544 169.58a1.74 1.74 0
        00-.752-1.402c-.48-.335-1.066-.46-1.61-.294M118.182
        167.884c-.314.104-.606.355-.711.668a1.14 1.14 0 00.156.994" />
      <path
        fill="none"
        vector-effect="non-scaling-stroke"
        d="M116.746 172.181c.878.293 1.861.168 2.594-.355.764-.51 1.214-1.336
        1.204-2.247M382.745
        218.24c-.183-68.324-34.122-133.18-91.218-174.43C234.409 2.519
        161.002-10.153 94.096 9.678M94.096 9.677C52.73 21.935 20.356 52.78 7.016
        92.706c-13.329 39.894-6.009 84.037 19.68 118.698M26.696 211.404c15.859
        21.406 41.186 34.4 68.102 34.921 26.884.51 52.135-11.519 67.908-32.327" />
      <path
        fill="none"
        vector-effect="non-scaling-stroke"
        d="M162.706 213.998c9.734-12.855 12.401-29.605
        7.236-45.032-5.197-15.438-17.621-27.712-33.459-33.004" />
    </svg>
    <blockquote class="BlockQuote">
      La raíz profunda de la Creación es el orden y sentirlo nos reconecta con todo lo que existe."
      <small>TODH</small>
    </blockquote>
  </div>

  <article class="GridItem GridArticle">
    <h3 class="GridArticleTitle">Una lógica de la observación</h3>
    <p>
      La base de lo que es TODH, para mí queda sobradamente explicada
      contemplando la Tetractys, la vesica Piscis o el número-idea Pitagórico.
      Es un contemplar dejándose penetrar por lo que se observa. Un rendirse
      ante la evidencia. Es mirar hasta que ves, nada más. Es una escucha
      atenta. Todo lo que hay es agua, fuego, tierra, aire y un quinto
      elemento... No són sólo elementos naturales, son principios abstractos,
      hechos de una sustancia que se encuentra en nuestras ideas, nuestras
      formas de ser, hay fuego en las ideas, agua en las emociones, tierra en
      los hechos, y aire en nuestros discursos.
      <strong>
        Antes es la espiral que el caracol. El caracol es la expresión de un
        principio anterior.
      </strong>
      Conforme vas cayendo en lo que la esencia de las cosas es, te van
      importando cada vez menos las formas y más las relaciones. Mi ánimo es el
      de transmitir esta vivencia profunda y no tanto perseguir una base teórica
      intelectual. Mucho se ha escrito ya por gente de talla muy superior a la
      mía, de modo que me parecería absurdo tratar de llenar más páginas al
      respecto.
    </p>
    <blockquote class="BlockQuote BlockQuoteLine">
      La raíz profunda de la Creación es el orden y sentirlo nos reconecta con todo lo que existe."
      <small>TODH</small>
    </blockquote>
    <p>
      Recalcar la naturaleza sintética de este proyecto que apunta siempre al
      origen, a lo original, a lo obvio. Un viaje que es de regreso a la Unidad.
      Una incursión. El símbolo tiene ese poder, condensa un vasto campo de
      significados y los disuelve quedándose con lo esencial.
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
    <h3 class="GridArticleTitle">Documentación</h3>
    <p>
      <strong>La mente abstracta</strong>
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio
      aperiam ratione!
      <a href="https://www.lifeder.com/pensamiento-abstracto/" target="_blank">
        Pensamiento abstracto
      </a>
    </p>
    <p>
      <strong>La analogía, la metáfora</strong>
      <br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
      corporis non, qui porro consequatur dolorem quibusdam doloremque odit,
      quaerat at ratione a magnam adipisci explicabo facere eveniet eligendi.
      Officia, tempora.
    </p>
    <p>
      <strong>El símbolo universal</strong>
      <br />
      "es el único en el que la relación entre el símbolo y lo que representa no
      es coincidente, sino intrínseca. Tiene su raíz en la experiencia de la
      afinidad que existe entre una emoción o un pensamiento, por una parte, y
      una experiencia sensorial, por la otra. Puede ser llamado universal porque
      es compartido por todos los hombres, en oposición no solamente al símbolo
      accidental, que es por su naturaleza completamente personal, sino también
      al convencional, limitado al grupo de personas que participan del mismo
      convenio. El símbolo universal tiene sus raíces en las propiedades de
      nuestro cuerpo, nuestros sentidos y nuestra mente, que son comunes a todos
      los hombres, y por consiguiente no se limita a personas o grupos
      determinados. El lenguaje del símbolo universal es, en verdad, la única
      lengua común que produjo la especie humana, lenguaje que olvidó antes de
      que lograra elaborar un lenguaje convencional."
      <em>Erich Fromm, El lenguaje olvidado, ed.cit., p. 22</em>
    </p>
    <p>
      <strong>Arquetipo</strong>
      Un arquetipo (del griego αρχή, arjé, ‘fuente’, ‘principio’ u ‘origen’, y
      τυπος, tipos, ‘impresión’ o ‘modelo’) es el patrón ejemplar del cual se
      derivan otros objetos, ideas o conceptos.
      <a href="https://es.wikipedia.org/wiki/Arquetipo">Wiki</a>
    </p>
    <p>
      <a
        href="https://es.wikipedia.org/wiki/N%C3%BAmero_%C3%A1ureo#:~:text=El%20n%C3%BAmero%20%C3%A1ureo%20(tambi%C3%A9n%20llamado,honor%20al%20escultor%20griego%20Fidias."
        target="_blank">
        Número áureo
      </a>
    </p>
  </article>

  <ul>
    <li>
      <a
        href="http://www.philosophica.info/voces/cassirer/Cassirer.html#:~:text=Cassirer%20define%20el%20s%C3%ADmbolo%20como,material%20que%20indica%20otra%20cosa.&text=Cada%20forma%20simb%C3%B3lica%20%E2%80%94la%20ciencia,s%C3%ADntesis%20de%20mundo%20y%20esp%C3%ADritu%E2%80%9D."
        target="_blank">
        Ideas sobre el símbolo, de Cassirer
      </a>
    </li>
    <li>
      <a href="https://www.uv.es/~japastor/mitos/b2-1.htm">Simbolismo</a>
    </li>
  </ul>

  <Tabs>
    <TabList>
      <Tab>fuentes antiguas</Tab>
      <Tab>libros</Tab>
      <Tab>videos</Tab>
      <Tab>varios</Tab>
    </TabList>

    <TabPanel>
      <ul transition:fade>
        <li>Cosmogénesis babilónica</li>
        <li>Cosmogénesis egipcia</li>
        <li>Escuela Pitagórica</li>
        <li>Hermetismo</li>
        <li>Astrología Humanista</li>
        <li>Filosofía presocrática</li>
      </ul>
    </TabPanel>

    <TabPanel>
      <ul transition:fade>
        <li>
          <a href="https://es.wikipedia.org/wiki/Kybali%C3%B3n" target="_blank">
            Kybalión
          </a>
        </li>
        <li>
          <a
            href="https://www.amazon.es/Inteligencia-Planetaria-Eugenio-Carutti/dp/1503231593"
            target="_blank">
            Inteligencia planetaria, Eugenio Carutti
          </a>
        </li>
        <li>
          <a
            href="https://www.amazon.es/articleina-geometria-Jaime-Buhigas-Tallon/dp/8497347447/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=divina+geometria&qid=1591180234&s=books&sr=1-1"
            target="_blank">
            La divina geometría, Jaime Buhigas
          </a>
        </li>
        <li>
          <a
            href="https://es.wikipedia.org/wiki/La_tempestad_(teatro)"
            target="_blank">
            La tempestad, William Shakespeare
          </a>
        </li>
        <li>
          <a
            href="https://www.amazon.es/Dimensiones-Real-Sergio-Trallero-Moreno/dp/8499495575"
            target="_blank">
            Dimensiones de lo real, Sergio Trallero
          </a>
        </li>
        <li>
          <a
            href="https://www.amazon.es/Criterium-Naturae-Epitome-Chemicina-Espagiria/dp/8483529521/ref=asc_df_8483529521/?tag=googshopes-21&linkCode=df0&hvadid=65152623195&hvpos=&hvnetw=g&hvrand=5667847825217104711&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=20270&hvtargid=pla-195165564795&psc=1"
            target="_blank">
            Criterium naturae, Abu Omar Yabir
          </a>
        </li>
        <li>
          <a
            href="https://www.amazon.es/h%C3%A9roe-las-mil-caras-Psicoan%C3%A1lisis/dp/6071620139/ref=sr_1_1?adgrpid=61125144239&dchild=1&gclid=Cj0KCQjwlN32BRCCARIsADZ-J4tf-kAkEGRqOzMS6bmRlISZEP0jBVhLbJ4rzJcY4v2y5ONOSSuQwaQaArkoEALw_wcB&hvadid=311322587918&hvdev=c&hvlocphy=20270&hvnetw=g&hvqmt=e&hvrand=15590512515270863501&hvtargid=kwd-665270157485&hydadcr=22669_1816198&keywords=el+heroe+de+las+mil+caras+campbell&qid=1591180846&sr=8-1&tag=hydes-21"
            target="_blank">
            El héroe de las mil caras, Joseph Campbell
          </a>
        </li>
      </ul>
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
          <a
            href="http://www.wikilogica.org.es/wikilogica/index.php/L%C3%B3gica_Global_Convergente"
            target="_blank">
            Lógica global convergente
          </a>
        </li>
      </ul>
    </TabPanel>
  </Tabs>
  <!-- <Prism language="css" code="{code_sample}" header="Sameple R Code" />  -->
</div>
