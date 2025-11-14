export type SelectEmits = {
  change: [value: string];
};
export type SelectItem = {
  text: string;
  value: string;
};
export type SelectProps = {
  items: SelectItem[];
  label?: string;
  placeholder?: string;
  value: string;
};
