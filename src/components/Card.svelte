
<script>
    export let title = "Default title";
    export let content = "Default content";
    export let caption = "Default caption";
    export let image = "img/img0.jpg";
    export let hasFigure = true;
    export let hasInlineSvg = false;
    import Figure from "./Figure.svelte";
</script>

<style lang="scss">
@import "../styles/main.scss";
.Card {
    border: 1px solid $silver;
    &Title {
        padding-top: $h2;
    }
    &Main {
        padding-left: $h2;
        padding-right: $h2;
    }
    &Content {
        color: $tertiary;
    }
}
</style>

<div class="Card">
    {#if hasFigure}
    <Figure {caption}>
        <img src="{image}" alt="">
    </Figure>
    {/if}
    {#if hasInlineSvg}
        <slot name="hasSvg">Put here inline-svg</slot>
    {/if}
    <div class="CardMain">
        <h4 class="CardTitle">{title}</h4>
        <p class="CardContent">{content}</p>
        <slot></slot>
    </div>
</div>