<script>
    const fetchImage = (async () => {
        const response = await fetch('/test.json');
        return await response.json();
    })();
    import Player from "../components/Player.svelte";
    import AddPlayer from "../components/AddPlayer.svelte";
    import Figure from "../components/Figure.svelte";
    import PageTitle from "../components/PageTitle.svelte";
    import Container from "../components/Container.svelte";
    import Banner from "../components/Banner.svelte";
    import typeWriter from "../actions/typeWriter.js";

    let players = [{
        name: "Juan gomez",
        points: 34
    }, {
        name: "Pedro",
        points: 12
    }, {
        name: "John Sanchez",
        points: 4
    }];

    const addPlayer = e => {
        const newPlayer = e.detail;
        players = [...players, newPlayer];
    };
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .Content {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(4, 1fr);
        gap: $h4;
        align-content: space-between;
        justify-content: space-around;
    }
</style>

<PageTitle 
    pageTitle="Laboratorio"
    pageSubTitle="Stylesheet"
/>

<Container>
    <h3>Figures</h3>
    <div class="Content">
        {#await fetchImage}
            <h1>SPINNER</h1>
            <h1>LOADING</h1>
            <h1>SPINNER</h1>
        {:then data}
        
        {#each data.demo as demo}
        <Figure caption={demo.alt}>
            <img src="{demo.img}" alt="{demo.alt}">
        </Figure>
        {/each}
        {:catch error}
    <p>An error occurred!</p>
{/await}
    </div>
</Container>

<Banner index={1} >
    Banner
</Banner>

<Container>
    This is a container
</Container>

<Container>
    <AddPlayer on:addplayer={addPlayer}/>
    
    {#if players.length === 0}
    <p>no players</p>
    {:else}
    {#each players as player}
    <Player name={player.name} points={player.points}/>
    {/each}
    {/if}
</Container>

