<script>
    export let caption;
</script>
<style lang="scss">
    @import "../styles/main.scss";
    figure {
        
    }
    figcaption {
        padding-top: $h0;
    }
</style>
<figure>
    <slot/>
    <figcaption>{caption}</figcaption>
</figure>