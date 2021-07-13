<script>
  import Header from 'src/components/header.svelte';
  import '../app.postcss';
</script>

<Header />
<div class="slot-container">
  <slot />
</div>

<style lang="scss">
  .slot-container {
    @apply container mx-auto px-4;

    height: calc(100vh - 6rem);
  }
</style>
