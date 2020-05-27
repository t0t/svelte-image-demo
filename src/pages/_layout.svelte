<script>
    import Nav from "../Nav.svelte";
    import BrandLogo from "../components/BrandLogo.svelte";
    import SiteFooter from "../components/SiteFooter.svelte";
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .SiteNavBar {
        display: grid;
        text-align: center;
        background-color: $light_grey;

        @include media(s2) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 10;
        }
    }
</style>

<header class="SiteNavBar">
    <BrandLogo />
    <Nav />
</header>

<main>
    <slot></slot>
</main>

<footer>
    <SiteFooter/>
</footer>