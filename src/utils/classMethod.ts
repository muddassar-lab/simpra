const classMethod = (
  element: HTMLElement,
  method: string,
  ClassName?: string
): DOMTokenList | undefined => {
  if (method == "add" && ClassName != undefined) {
    element.classList.add(ClassName);
  } else if (method == "remove" && ClassName != undefined) {
    element.classList.remove(ClassName);
  } else if (method == "toggle" && ClassName != undefined) {
    element.classList.toggle(ClassName);
  } else if (method == "get") {
    return element.classList;
  }
  return undefined;
};
export default classMethod;
