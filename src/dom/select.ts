const select = (selector: string) => {
  if (typeof selector != "string") {
    console.error(`${selector} is not a vaild selector.`);
    return undefined;
  } else {
    let element: NodeListOf<HTMLElement> = document.querySelectorAll(selector);
    return element;
  }
};
export default select;
