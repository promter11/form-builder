export type KeyValueInputEmits = {
  add: [];
  change: [index: number, payload: Partial<KeyValueInputItem>];
  remove: [index: number];
};
export type KeyValueInputItem = {
  id: string;
  key: string;
  value: string;
};
export type KeyValueInputProps = {
  items: KeyValueInputItem[];
};
