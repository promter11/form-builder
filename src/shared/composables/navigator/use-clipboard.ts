export const useClipboard = () => {
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      throw new Error("Copy failed");
    }
  };

  return {
    copy,
  };
};
