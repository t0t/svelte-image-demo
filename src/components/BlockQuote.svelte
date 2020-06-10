<script>
    export let quote, author, invert;
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .Quote {
        color: $tertiary;
        font-style: italic;
    }
    .txt-invert {
        color: $primary;
    }
</style>
{#if invert}
<blockquote class="Quote QuoteLine txt-invert">
    <strong>"{quote}"</strong><br>
    <small>{author}</small>
</blockquote>
    {:else}
    <blockquote class="Quote QuoteLine">
        <strong>"{quote}"</strong><br>
    <small>{author}</small>
</blockquote>
    {/if}