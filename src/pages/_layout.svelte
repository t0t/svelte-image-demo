<script>
    import Nav from "../Nav.svelte";
    import BrandLogo from "../components/BrandLogo.svelte";
    import SiteFooter from "../components/SiteFooter.svelte";
</script>

<style lang="scss">
    @import "../styles/main.scss";

    .SiteNavBar {
        background-color: $light_grey;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @include media(s0) {
            flex-direction: column;
        }
        @include media(s1) {
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

<SiteFooter />