<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<style module lang="postcss">
.root {
  padding: 12px 16px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background-color: var(--color-surface);
}
</style>
