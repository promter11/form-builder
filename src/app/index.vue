<script setup lang="ts">
import { Container, Divider } from "@/shared/ui";
import { Header } from "@/widgets/header";
</script>

<template>
  <div :class="$style.root">
    <Container>
      <div :class="$style.surface">
        <Header />
        <Divider />
        <main :class="$style.main">
          <RouterView />
        </main>
      </div>
    </Container>
  </div>
</template>

<style module lang="postcss">
.root {
  height: inherit;
  background: var(--color-root-bg);
}

.surface {
  border-radius: var(--radius-surface);
  box-shadow: var(--shadow-surface);
  overflow: hidden;
  background: var(--color-surface);
}

.main {
  padding: var(--padding-container);
}
</style>
