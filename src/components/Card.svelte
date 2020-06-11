<script>
    export let title = "Default title";
    export let description = "Default content";
    export const caption = "Default caption";
    export const alt = "Default alt";
    export let image = "img/img0.jpg";
    export let hasImage = true;
    export let hasInlineSvg = false;
</script>

<style lang="scss">
@import "../styles/main.scss";
.Card {
    background-color: $white;
    /* border: 1px solid $silver; */
    border-bottom-right-radius: $h2;
    border-bottom-left-radius: $h2;
    
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
    {#if hasImage}
        <img src="{image}" alt="{alt}">
    {/if}
    {#if hasInlineSvg}
        <slot name="hasSvg">Put here inline-svg</slot>
    {/if}
    <div class="CardMain">
        <h4 class="CardTitle">{title}</h4>
        <p class="CardContent">{description}</p>
        <slot></slot>
    </div>
</div>