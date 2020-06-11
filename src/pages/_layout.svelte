<script>
    import Nav from "../Nav.svelte";
    import SiteBrand from "../components/SiteBrand.svelte";
    import SiteFooter from "../components/SiteFooter.svelte";
</script>

<style lang="scss">
    @import "../styles/main.scss";
</style>

<main class="Main">
    <SiteBrand />
    <nav class="Main__nav">
        <Nav />
    </nav>
    <slot></slot>
    <SiteFooter />
</main>
