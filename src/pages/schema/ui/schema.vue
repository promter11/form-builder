<script setup lang="ts">
import { computed } from "vue";

import { useFormStore } from "@/features/form";
import { useClipboard } from "@/shared/composables";
import { downloadFile } from "@/shared/lib";
import { Button, Card, Icon } from "@/shared/ui";

const clipboard = useClipboard();
const formStore = useFormStore();

const schema = computed(() =>
  JSON.stringify(
    formStore.fields,
    (key, value) => {
      if (key === "id") {
        return undefined;
      }

      return value;
    },
    2
  )
);
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.actions">
      <Button
        color="neutral"
        @click="clipboard.copy(schema)"
      >
        <Icon
          name="copy"
          size="s"
        />
        Copy
      </Button>
      <Button @click="downloadFile('schema', schema)">
        <Icon
          name="download"
          size="s"
        />
        Download
      </Button>
    </div>
    <Card>
      <pre>{{ schema }}</pre>
    </Card>
  </div>
</template>

<style module lang="postcss">
.root {
  display: flex;
  flex-direction: column;
  gap: var(--gap-container);
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--gap-container);
}
</style>
