import { ref } from "vue";

export const useRipple = () => {
  const hostRef = ref<HTMLElement>();
  const rippleRef = ref<HTMLElement>();

  const trigger = (event: MouseEvent) => {
    const host = hostRef.value;
    const ripple = rippleRef.value;
    if (!host || !ripple) {
      return;
    }

    const rect = host.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

    ripple.style.animation = "none";
    requestAnimationFrame(() => {
      ripple.style.animation = "";
    });
  };

  return {
    hostRef,
    rippleRef,
    trigger,
  };
};
