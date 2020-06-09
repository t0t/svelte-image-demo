<style lang="scss">
    @import "../styles/main.scss";
    .Cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax($h6, 1fr));
        gap: $h0;
    }
</style>

<div class="Cards">
    <slot/>
</div>