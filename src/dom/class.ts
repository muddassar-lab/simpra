import methodCheck from "../utils/methodCheck";
import element_select from "../utils/element_select";
import classMethod from "../utils/classMethod";
const Class = (
  selector: string | NodeListOf<HTMLElement>,
  method: string,
  className: string
) => {
  const method_result = methodCheck(method, ["add", "remove", "toggle"]);
  if (method_result == true) {
    if (typeof className == "string") {
      if (typeof selector == "string" || typeof selector == "object") {
        const element: NodeListOf<HTMLElement> | undefined = element_select(
          selector
        );
        if (typeof element == "object") {
          element.forEach((element_single: HTMLElement) => {
            classMethod(element_single, method, className);
          });
        } else {
          console.error("element is undefined");
        }
      } else {
        console.error("Selector paramter should be string or NodeList object");
      }
    } else {
      console.error(
        `className parameter should be string.The paramter you passed is ${className}`
      );
    }
  }
};
export default Class;
