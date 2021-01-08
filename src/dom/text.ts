import element_select from "../utils/element_select";
const text = (
  selector: string | NodeListOf<HTMLElement>,
  value?: string | number
): Array<string> | undefined => {
  const elements = element_select(selector);
  if (elements != undefined) {
    if (value == undefined) {
      const elementTextArray: Array<string> = [];
      elements.forEach((element) => {
        elementTextArray.push(element.innerText);
      });
      return elementTextArray;
    } else {
      elements.forEach((element) => {
        element.innerText = value.toString();
      });
    }
  } else {
    console.error(
      `Element is undefined.The selector paramter you passed is ${selector}`
    );
  }
};
export default text;
