<script>
  // let y = 0;
</script>

<style lang="scss">
  @import "../styles/main.scss";

  .PageTitleContainer {
    width: 100%;
    display: grid;
    grid-auto-flow: row;
    /* justify-content: stretch; */
    align-items: center;
    flex-direction: column;
    border-bottom-width: 1px;
        border-bottom-style: dashed;
        border-bottom-color: $alpha_grey;
        background-color: $tertiary;
    /* background-color: $alpha_grey; */
    
    @include padding-top(1);
    @include padding-bottom(0);
    
    @include media(s1) {
      margin-top: $h4;
      /* @include padding-top(2); */
      @include padding-bottom(2);
    }
  }

</style>

<!-- <svelte:window bind:scrollY={y} /> -->

<header class="PageTitleContainer">
  <hgroup class="text-center">
    <slot name="pagetitle"></slot>
    <slot name="subtitle"></slot>
    <slot name="extratitle"></slot>
    <slot></slot>
  </hgroup>
</header>