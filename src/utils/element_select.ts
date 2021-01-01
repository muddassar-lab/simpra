import select from "../dom/select";
const element_select = (
  selector: string | NodeListOf<HTMLElement>
): NodeListOf<HTMLElement> | undefined => {
  if (typeof selector == "string") {
    let element: NodeListOf<HTMLElement> | undefined;
    element = select(selector);
    return element;
  } else {
    return selector;
  }
};
export default element_select;
