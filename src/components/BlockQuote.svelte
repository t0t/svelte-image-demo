<script>
    export let quote, author;
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .Quote {
        color: $tertiary;
        font-style: italic;
    }
</style>

<blockquote class="Quote QuoteLine">
    <strong>"{quote}"</strong><br>
    <small>{author}</small>
</blockquote>