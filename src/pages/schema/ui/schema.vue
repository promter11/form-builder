<script setup lang="ts">
import { computed } from "vue";

import { useFormStore } from "@/features/form";
import { useClipboard } from "@/shared/composables";
import { downloadFile } from "@/shared/lib";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Icon } from "@/shared/ui/icon";
import { useToast } from "@/shared/ui/toast";

const clipboard = useClipboard();
const formStore = useFormStore();
const toast = useToast();

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

const copy = async (text: string) => {
  try {
    await clipboard.copy(text);
    toast?.actions?.create({
      title: "Copied successfully",
      variant: "success",
    });
  } catch {
    toast?.actions?.create({
      title: "Copy failed",
      variant: "danger",
    });
  }
};
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.actions">
      <Button
        :class="$style.button"
        color="neutral"
        @click="copy(schema)"
      >
        <Icon
          name="copy"
          size="s"
        />
        Copy
      </Button>
      <Button
        :class="$style.button"
        @click="downloadFile('schema', schema)"
      >
        <Icon
          name="download"
          size="s"
        />
        Download
      </Button>
    </div>
    <Card :class="$style.card">
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
  flex-wrap: wrap;
  gap: var(--gap-control);
}

.button {
  @media screen and (max-width: 479px) {
    width: 100%;
    justify-content: center;
  }
}

.card {
  overflow-x: auto;
}
</style>
