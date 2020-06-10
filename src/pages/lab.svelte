<script>
    const fetchImage = (async () => {
        const url = "/test.json";
        const response = await fetch(url);
        return await response.json();
    })();
    import Area from "../components/Area.svelte";
    import Section from "../components/Section.svelte";
    import Loading from "../components/Loading.svelte";
    import ToggleMenu from "../components/ToggleMenu.svelte";
    // import Player from "../components/Player.svelte";
    import BlockQuote from "../components/BlockQuote.svelte";
    import Button from "../components/Button.svelte";
    import Cards from "../components/Cards.svelte";
    import Card from "../components/Card.svelte";
    import SiteBrand from "../components/SiteBrand.svelte";
    import List from "../components/List.svelte";
    import Figure from "../components/Figure.svelte";
    import IconEspiral from "../components/icons/IconEspiral.svelte";
    import PageTitle from "../components/PageTitle.svelte";
    import Banner from "../components/Banner.svelte";
    import typeWriter from "../actions/typeWriter.js";
    import {
        Tabs,
        TabList,
        TabPanel,
        Tab
    } from '../components/tabs.js';
</script>

<style lang="scss">
    @import "../styles/main.scss";


    .Main {
        display: grid;
        grid-template-columns: repeat(12, minmax($h3, 1fr));
        grid-auto-rows: auto;
        grid-auto-flow: row;
        gap: $h0;
        padding: $h1;
        grid-template-areas: 
        "b b . . . . . . . n n n"
        ". h h h h h h h h h s s"
        ". c c c c c c c c c s s"
        ". c c c c c c c c c s s"
        ". c c c c c c c c c . ."
        ". c c c c c c c c c . ."
        ". f f f f f f f f f t t"
        ;
        border: 2px solid green;
        position: relative;
        &:before {
            color: green;
            content: ".Main";
            position: absolute;
            top: $h-2;
            left: $h-2;
            font-size: $h0;
            font-weight: bold;
        }
        > div {
            padding: $h2;
            position: relative;
            border: 1px solid green;
            &:before {
                color: green;
            }
        }
        div {
            position: relative;
            min-height: $h3;
            &:before {
                position: absolute;
                font-size: $h0;
                top: $h-2;
                left: $h-2;
            } 
        }

        &__brand {
            grid-area: b;
            &:before {
                content: ".Main__brand";
            }
        }
        &__header {
            grid-area: h;
            &:before {
                content: ".Main__header";
            }
        }
        &__content {
            grid-area: c;
            &:before {
                content: ".Main__content";
            }
        }
        &__nav {
            grid-area: n;
            &:before {
                content: ".Main__nav";
            }
        }
        &__footer {
            grid-area: f;
            &:before {
                content: ".Main__footer";
            }
        }
        &__sidebar{
            grid-area: s;
            &:before {
                content: ".Main__sidebar";
            }
        }
        &__totop{
            grid-area: t;
            &:before {
                content: ".Main__totop";
            }
        }
    }
    .Content {
        display: grid;
        width: 100%;
        min-height: 100%;
        grid-template-columns: repeat(12, 1fr);
        grid-auto-rows: auto;
        grid-auto-flow: row;
        gap: $h0;
        padding: $h0;
        grid-template-areas: 
            ". . . h h h h h h . . ."
            ". ca ca ca ca ca ca ca ca ca ca ."
            ". ca ca ca ca ca ca ca ca ca ca ."
            ". . . n n n n n n . . ."
            ". f f f f f f f f f f ."
        ;
        border: 1px solid blue;
        &:before {
            content: ".Content";
            color: blue;
            font-weight: bold;
        }
        div {
            border: 1px solid $blue;
            &:before {
                color: blue;
            }
        }
        &__header {
            grid-area: h;
            &:before {
                content: ".Content__header"
            }
        }
        &__area {
            grid-area: ca;
            border: 1px solid $silver;
            padding: $h2;
            display: grid;
            gap: $h-2;
            &:before {
                content: ".Content__area"
            }
        }
        &__nav {
            grid-area: n;
            &:before {
                content: ".Content__nav"
            }
        }
        &__footer {
            grid-area: f;
            &:before {
                content: ".Content__footer";
            }
        }
    }
    .Area {
        border: 1px dotted red;
        position: relative;
        min-height: $h2;
        &:before {
            content: ".Area";
            color: red;
            position: absolute;
            top: $h-1;
            left: $h-1;
            font-weight: bold;
            font-size: $h0;
        }
    }
    .Colors {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax($h5, 1fr));
        > div {
            /* border: 1px dashed $silver; */
            min-height: $h5;
            
            &:nth-child(1) {
                background-color: $primary;
                padding: $h0;
                &:before {
                    content: "#{$primary}";
                    font-weight: bold;
                    display: block;
                }
                &:after {
                    content: "$primary";
                }
            }
            &:nth-child(2) {
                background-color: $secondary;
                padding: $h0;
                &:before {
                    content: "#{$secondary}";
                    font-weight: bold;
                    display: block;
                }
                &:after {
                    content: "$secondary";
                }
            }
            &:nth-child(3) {
                background-color: $tertiary;
                padding: $h0;
                &:before {
                    content: "#{$tertiary}";
                    font-weight: bold;
                    display: block;
                }
                &:after {
                    content: "$tertiary";
                }
            }
            &:nth-child(4) {
                background-color: $quaternary;
                padding: $h0;
                &:before {
                    content: "#{$quaternary}";
                    font-weight: bold;
                    display: block;
                }
                &:after {
                    content: "$quaternary";
                }
            }
 
            &:nth-child(5) {
                background-color: $blue;
                padding: $h0;
                &:before {
                    content: "#{$blue}";
                    font-weight: bold;
                    display: block;
                }
                &:after {
                    content: "$blue";
                }
            }
            &:nth-child(6) {
                background-color: $alpha_black;
                padding: $h0;
                &:before {
                    content: "#{$alpha_black}";
                    font-weight: bold;
                    display: block;
                }
                &:after {
                    content: "$alpha_black";
                }
            }
            &:nth-child(7) {
                background-color: $alpha_grey;
                padding: $h0;
                &:before {
                    content: "#{$alpha_grey}";
                    font-weight: bold;
                    display: block;
                }
                &:after {
                    content: "$alpha_grey";

                }
            }
            &:nth-child(8) {
                background-color: $alpha_white;
                padding: $h0;
                &:before {
                    content: "#{$alpha_white}";
                    font-weight: bold;
                    display: block;
                }
                &:after {
                    content: "$alpha_white";
                }
            }
            &:nth-child(9) {
                background-color: $grey;
                padding: $h0;
                &:before {
                    content: "#{$grey}";
                    font-weight: bold;
                    display: block;
                }
                &:after {
                    content: "$grey";
                }
            }
            &:nth-child(10) {
                background-color: $dark_grey;
                padding: $h0;
                &:before {
                    content: "#{$dark_grey}";
                    font-weight: bold;
                    display: block;
                }
                &:after {
                    content: "$dark_grey";
                }
            }
            &:nth-child(11) {
                background-color: $black;
                padding: $h0;
                &:before {
                    content: "#{$black}";
                    font-weight: bold;
                    display: block;
                }
                &:after {
                    content: "$black";
                }
            }
            &:nth-child(12) {
                background-color: $white;
                padding: $h0;
                &:before {
                    content: "#{$white}";
                    font-weight: bold;
                    display: block;
                }
                &:after {
                    content: "$white";
                }
            }
            &:nth-child(13) {
                background-color: $silver;
                padding: $h0;
                &:before {
                    content: "#{$silver}";
                    font-weight: bold;
                    display: block;
                }
                &:after {
                    content: "$primary";
                }
            }
            &:nth-child(14) {
                background-color: $color_1;
                padding: $h0;
                &:before {
                    content: "#{$color_1}";
                    font-weight: bold;
                    display: block;
                }
                &:after {
                    content: "$color_1";
                }
            }
            &:nth-child(15) {
                background-color: $color_2;
                padding: $h0;
                &:before {
                    content: "#{$color_2}";
                    font-weight: bold;
                    display: block;
                }
                &:after {
                    content: "$color_2";
                }
            }
            &:nth-child(16) {
                background-color: $color_3;
                padding: $h0;
                &:before {
                    content: "#{$color_3}";
                    font-weight: bold;
                    display: block;
                }
                &:after {
                    content: "$color_3";
                }
            }
        }
    }
</style>

<PageTitle 
    pageTitle="Living Design system" 
    pageSubTitle="Styleguide for browser prototyping" 
/>

<Area>
    <Section title="CSS-Grid layout">
        <div class="Main">
            <div class="Main__brand"></div>
            <div class="Main__nav"></div>
            <div class="Main__header"></div>
            <div class="Main__content">
                <div class="Content">
                    <div class="Content__header"></div>
                    <div class="Content__nav"></div>
                    <div class="Content__area">
                        <article class="Area"></article>
                        <article class="Area"></article>
                        <article class="Area"></article>
                    </div>
                    <div class="Content__footer"></div>
                </div>
            </div>
            <div class="Main__sidebar"></div>
            <div class="Main__footer"></div>
            <div class="Main__totop"></div>
        </div>
    </Section>
</Area>

<Area>
    <Section title="Full Simple Card">
        <Card />
    </Section>
</Area>

<Area>
    <Section title="Cards">
        <Cards>
            <Card title="Title" content="Lorem ipsum dolor sit amet consectetur adipisicing.">
                <Button text="Button" />
            </Card>
            <Card title="Title 2"
                content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perspiciatis dicta molestiae facilis minima." />
            <Card title="With inlne svg instead image"
                content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perspiciatis dicta molestiae facilis minima."
                hasFigure={false} hasInlineSvg={true}>
                <span slot="hasSvg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round"
                        stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 169 169">
                        <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke"
                            transform="matrix(.03822 0 0 .03822 -452.1 -33.668)" />
                        <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke"
                            transform="matrix(.03822 0 0 .03822 -536 -33.668)" />
                        <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke"
                            transform="matrix(.03822 0 0 .03822 -493.61 -33.668)" />
                        <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke"
                            stroke-width="13.08" transform="matrix(.07644 0 0 .07644 -1072.51 -151.74)" />
                    </svg>
                </span>
            </Card>
            <Card title="Éste no lleva imagen" hasFigure={false}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, distinctio libero quasi non voluptatibus nisi aut adipisci hic reprehenderit ipsum?" />
            <Card title="Éste tampoco..." hasFigure={false}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, distinctio libero quasi non voluptatibus nisi aut adipisci hic reprehenderit ipsum?" />
        </Cards>
    </Section>
</Area>

<Area>
    <Section title="Site brand">
        <SiteBrand/>
    </Section>
</Area>

<Area>
    <Section title="Colors">
        <div class="Colors">
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
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        
    </Section>
</Area>

<Area>
    <Section title="Fetched data from service">
        <article class="Content">
            {#await fetchImage}
                <Loading/>
            {:then data}
            
                {#each data.demo as demo}
                <Figure caption={demo.alt}>
                    <img src="{demo.img}" alt="{demo.alt}">
                </Figure>
                {/each}

            {:catch error}
            <p>An error occurred!</p>
            {/await}
        </article>
    </Section>
</Area>

<Banner index={0} >
    Banner (inverted variant) with simple text inside
</Banner>

<Banner index={1} >
    Banner with simple text inside
</Banner>

<Banner index={0} >
    <div>
        <BlockQuote quote="This is a blockquote" author="Author" />
        <p>Banner with things inside</p>
    </div>
    <IconEspiral/>
</Banner>

<Area>
    This is a simple Area component
</Area>

<Area>
    <PageTitle 
        pageTitle="Page title"
        pageSubTitle="Page Subtitle"
    />
</Area>

<Area>
    <h3>Typography</h3>
    <h1>h1 Main title</h1>
    <h2>h2 Subtitle</h2>
    <h3>h3 Header</h3>
    <h4>h4 Header</h4>
    <h5>h5 Header</h5>
    <p>Lorem ipsum dolor sit amet <em>consectetur</em> adipisicing elit. Est ullam <strong>tempora</strong> accusamus porro doloremque. Mollitia praesentium neque aut! Quibusdam id in <a href="./about">repellendus</a> sint? Quam iste dignissimos amet nisi, eveniet ullam. <small>Small text</small></p>
   
    <BlockQuote quote="This is a blockquote" author="Author" />

</Area>

<Area>
    <h3>Lists</h3>
    <List>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
    </List>
</Area>

<Area>
    <h3>Icons and graphics</h3>
    <div>
        <IconEspiral/>
        Full size
    </div>
    <div>
        <IconEspiral size="300"/>
        Fixed custom size
    </div>
    <div>
        <IconEspiral size="24"/>
        Fixed custom size
    </div>
</Area>

<Area>
    <h3>Figure</h3>
    <Figure caption="The caption">
        <img src="img/img0.jpg" alt="Alt text">
    </Figure>
</Area>

<Area>
    <h3>Toggle Menu</h3>
    <ToggleMenu/>
</Area>

<Area>
    <h3>Buttons</h3>
    <Button text="Button"/>
    <Button text="Another button"/>
</Area>

<Area>
    <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
          <Tab>Tab 4</Tab>
        </TabList>
  
      <TabPanel>
        Tab panel 1
      </TabPanel>
  
      <TabPanel>
        Tab panel 2
      </TabPanel>
  
      <TabPanel>
        Tab panel 3
      </TabPanel>

      <TabPanel>
        Tab panel 4
      </TabPanel>
    </Tabs>
</Area>