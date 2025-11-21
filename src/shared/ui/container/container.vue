<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<style module lang="postcss">
.root {
  max-width: var(--size-container);
  margin: 0 auto;
  padding: var(--padding-container);
}
</style>
