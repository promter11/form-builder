import { useToast } from "../ui";

export const useClipboard = () => {
  const toast = useToast();

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
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

  return {
    copy,
  };
};
