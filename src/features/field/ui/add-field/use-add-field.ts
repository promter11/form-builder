import { nanoid } from "nanoid";

import { fields } from "@/entities/field";
import { useFormStore } from "@/features/form";
import { useToast } from "@/shared/ui/toast";

import type { AddFieldProps } from "./types";

export const useAddField = (props: AddFieldProps) => {
  const formStore = useFormStore();

  const toast = useToast();

  const addField = () => {
    formStore.addField({
      ...fields[props.preset.control],
      id: nanoid(),
    });
    toast?.actions?.create({
      title: "Successfully added",
      variant: "success",
    });
  };

  return {
    addField,
  };
};
