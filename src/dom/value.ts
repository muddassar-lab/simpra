import element_select from "../utils/element_select";
const value = (
  selector: string | NodeListOf<HTMLElement>,
  value?: string | number
): Array<object> | undefined => {
  const elements = element_select(selector);
  if (elements != undefined) {
    if (value == undefined) {
      interface InputElementObjectConstrutor {
        element: HTMLElement;
        value: string;
      }
      let element_input_array: Array<object> = [];
      elements.forEach((element) => {
        let value = (<HTMLInputElement>element).value;
        let input_object: InputElementObjectConstrutor = {
          element: element,
          value: value,
        };
        element_input_array.push(input_object);
      });
      return element_input_array;
    } else {
      elements.forEach((element) => {
        (<HTMLInputElement>element).value = value.toString();
      });
    }
  } else {
    console.error(
      `Element is undefined.The selector paramter you passed is ${selector}`
    );
  }
};
export default value;
