export type InputEmits = {
  beforeInput: [event: Event];
  input: [value: string];
};
export type InputProps = {
  isDisabled?: boolean;
  inputMode?: InputMode;
  label?: string;
  placeholder?: string;
  value: string;
};
export type InputMode = "decimal" | "numeric" | "text";
