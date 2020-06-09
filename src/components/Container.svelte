<style lang="scss">
    @import "../styles/main.scss";
    .Container {
        /* background-color: yellow; */
        margin-left: $h4;
        margin-right: $h4;
        margin-bottom: $h4;
    }
    .Banner ~ .Container{
        margin-top: $h4;
    }
</style>
<div class="Container">
    <slot></slot>
</div>