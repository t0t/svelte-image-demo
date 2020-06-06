<script>
  import Typewriter from 'svelte-typewriter';
</script>

<style lang="scss">
  @import "../styles/main.scss";

  .PageTitleContainer {
    width: 100%;
    display: grid;
    grid-auto-flow: row;
    color: $black_light;
    align-items: center;
    flex-direction: column;
    background-color: $color_3;
    /* background-color: $alpha_grey; */

    @include padding-top(1);
    @include padding-bottom(0);

    @include media(s1) {
      margin-top: $h4;
      @include padding-bottom(2);
    }
  }
</style>

<!-- <svelte:window bind:scrollY={y} /> -->

<header class="PageTitleContainer">
  <Typewriter>
    <hgroup class="text-center">
      <slot name="pagetitle"></slot>
      <slot name="subtitle"></slot>
      <slot name="extratitle"></slot>
      <slot></slot>
    </hgroup>
  </Typewriter>
</header>