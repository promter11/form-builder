<script setup lang="ts">
import { downloadFile } from "@/shared/lib";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Icon } from "@/shared/ui/icon";

import { useSchema } from "../model";

const model = useSchema();
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.actions">
      <Button
        :class="$style.button"
        color="neutral"
        @click="model.copy(model.schema.value)"
      >
        <Icon
          name="copy"
          size="s"
        />
        Copy
      </Button>
      <Button
        :class="$style.button"
        @click="downloadFile('schema', model.schema.value)"
      >
        <Icon
          name="download"
          size="s"
        />
        Download
      </Button>
    </div>
    <Card :class="$style.card">
      <pre>{{ model.schema.value }}</pre>
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
