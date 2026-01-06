export type Tab = {
  id: string;
  isDisabled?: boolean;
  label: string;
  value: string;
};
export type TabsEmits = {
  change: [value: string];
};
export type TabsProps = {
  items: Tab[];
  value: string;
};
