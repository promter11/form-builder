<template>
  <div :class="$style.root">
    <RouterView />
  </div>
</template>

<style module lang="postcss">
.root {
  height: inherit;
  background-color: var(--color-root-bg);
}
</style>
