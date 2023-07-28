export const setProperty = (property: string, value: string): void => {
  document.documentElement.style.setProperty(property, value);
};

export const removeProperty = (property: string): string => {
  return document.documentElement.style.removeProperty(property);
};
