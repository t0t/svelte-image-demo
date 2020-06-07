<script>
    import Nav from "../Nav.svelte";
    import SiteBrand from "../components/SiteBrand.svelte";
    import SiteFooter from "../components/SiteFooter.svelte";
</script>

<style lang="scss">
    @import "../styles/main.scss";

    .SiteNavBar {
        display: grid;
        grid-template-columns: repeat(auto-fill, 1fr $h5);
        grid-auto-flow: row;
        height: $h4;
        background-color: $color_3;

        @include media(s1) {
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
    <nav class="SiteNavBar">
        <SiteBrand />
        <Nav />
    </nav>
    <section>
        <slot></slot>
    </section>
    <SiteFooter />
</main>
