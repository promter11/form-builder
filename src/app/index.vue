<script setup lang="ts">
import { Container, Divider, Toast, useToast } from "@/shared/ui";
import { Header } from "@/widgets/header";

const toast = useToast();
</script>

<template>
  <div :class="$style.root">
    <Container :class="$style.container">
      <div :class="$style.surface">
        <Header />
        <Divider />
        <main :class="$style.main">
          <RouterView />
        </main>
      </div>
    </Container>
    <Teleport to="body">
      <Toast
        v-bind="toast?.data?.value"
        v-on="toast?.actions"
      />
    </Teleport>
  </div>
</template>

<style module lang="postcss">
.root {
  height: inherit;
  background: var(--color-root-bg);
}

.container {
  height: inherit;
}

.surface {
  display: flex;
  flex-direction: column;
  max-height: 100%;
  border-radius: var(--radius-surface);
  box-shadow: var(--shadow-surface);
  overflow: hidden;
  background: var(--color-surface);
}

.main {
  padding: var(--padding-container);
  overflow-y: auto;
}
</style>
