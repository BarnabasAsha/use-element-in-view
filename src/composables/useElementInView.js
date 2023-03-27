import { ref } from "vue";

export const useElementInView = (
  actionCallback = () => {},
  options = { threshold: 1.0 },
  repeat = false
) => {
  const isElementIntersecting = ref(false);

  const observerCallback = (entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        isElementIntersecting.value = true;
        actionCallback(target)
      } else if(repeat) {
        isElementIntersecting.value = false;
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, {
    ...options
  });

  return {
    isElementIntersecting,
    observer
  };
};
