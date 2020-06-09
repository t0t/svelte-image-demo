<style lang="scss">
    @import "../styles/main.scss";
    .Area {
        /* background-color: yellow; */
        margin-left: $h4;
        margin-right: $h4;
        margin-bottom: $h4;
    }
    .Banner ~ .Area{
        margin-top: $h4;
    }
</style>
<div class="Area">
    <slot></slot>
</div>