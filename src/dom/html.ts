import element_select from "../utils/element_select";
const html = (
  selector: string | NodeListOf<HTMLElement>,
  value?: string | number
): Array<string> | undefined => {
  const elements = element_select(selector);
  let elementHtmlArray: Array<string> = [];
  if (elements != undefined) {
    if (value == undefined) {
      elements.forEach((element) => {
        elementHtmlArray.push(element.innerHTML);
      });
      return elementHtmlArray;
    } else if (value != undefined) {
      elements.forEach((element) => {
        element.innerHTML = value.toString();
      });
    }
  }
};
export default html;
