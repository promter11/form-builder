export type ButtonColor = "neutral" | "primary";
export type ButtonProps = {
  color?: ButtonColor;
  isDisabled?: boolean;
  variant?: ButtonVariant;
};
export type ButtonVariant = "bordered" | "plain" | "solid";
