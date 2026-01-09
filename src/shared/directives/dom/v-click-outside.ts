import type { DirectiveBinding } from "vue";

interface ExtendedHTMLElement extends HTMLElement {
  clickOutside: (event: Event) => void;
}

export const clickOutsideDirective = {
  beforeMount: (element: ExtendedHTMLElement, binding: DirectiveBinding) => {
    element.clickOutside = (event: Event) => {
      if (!(element === event.target || element.contains(event.target as Node))) {
        binding.value(event);
      }
    };
    document.addEventListener("click", element.clickOutside);
  },
  unmounted: (element: ExtendedHTMLElement) => {
    document.removeEventListener("click", element.clickOutside);
  },
};
