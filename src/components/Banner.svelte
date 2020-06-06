<script>
    export let backgroundColor;
</script>

<style lang="scss">
    @import "../styles/main.scss";
</style>

<div class="Banner BannerBlack" style="background-color: {backgroundColor}">
    <slot name="image"></slot>
    <slot></slot>
</div>