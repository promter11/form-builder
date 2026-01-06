export type Tab = {
  id: string;
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
