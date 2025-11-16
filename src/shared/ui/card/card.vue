<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<style module lang="postcss">
.root {
  padding: var(--padding-surface);
  border: var(--size-surface-border) solid var(--color-surface-border);
  border-radius: var(--radius-surface);
  background-color: var(--color-surface);
}
</style>
