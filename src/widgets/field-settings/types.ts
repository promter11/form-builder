import type { UnionSetting } from "@/entities/field";

export type FieldSettingsEmits = {
  update: [index: number, payload: Partial<UnionSetting>];
};
export type FieldSettingsProps = {
  settings: UnionSetting[];
};
