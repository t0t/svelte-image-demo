<script>
    export let index = 0;
    export let modificador = [
        "BannerBlack",
        "BannerDefault"
    ];
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .BannerDefault {
        background-color: $primary;
        stroke: $tertiary;
        fill: $tertiary;
    }
</style>

<div class="Banner {modificador[index]}">
    <slot name="image"></slot>
    <slot></slot>
</div>