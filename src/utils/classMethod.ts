const classMethod = (
  element: HTMLElement,
  method: string,
  ClassName: string
) => {
  if (method == "add") {
    console.log(element.classList);
    element.classList.add(ClassName);
  } else if (method == "remove") {
    element.classList.remove(ClassName);
  } else if (method == "toggle") {
    element.classList.toggle(ClassName);
  }
};
export default classMethod;
