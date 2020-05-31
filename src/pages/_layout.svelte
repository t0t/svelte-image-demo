<script>
    import Nav from "../Nav.svelte";
    import SiteBrand from "../components/SiteBrand.svelte";
    import SiteFooter from "../components/SiteFooter.svelte";
</script>

<style lang="scss">
    @import "../styles/main.scss";

    .SiteNavBar {
        /* background-color: $light_grey; */
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax($h6, 1fr));
        /* grid-template-rows: 1fr; */
        grid-auto-flow: row;
        /* align-items: center; */
        height: $h4;
        border-bottom-width: 1px;
        border-bottom-style: dashed;
        border-bottom-color: $alpha_grey;
        background-color: $tertiary;
        /* justify-content: space-between; */
        @include media(s1) {
            /* align-items: center; */
            grid-auto-flow: column;
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 10;
        }
    }
</style>


<main>
    <header class="SiteNavBar">
        <SiteBrand />
        <Nav />
    </header>
    <slot></slot>
    <SiteFooter />
</main>
