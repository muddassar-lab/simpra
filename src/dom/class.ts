import methodCheck from "../utils/methodCheck";
import element_select from "../utils/element_select";
import classMethod from "../utils/classMethod";
const Class = (
  selector: string | NodeListOf<HTMLElement>,
  method: string,
  className?: string
): Array<object> | undefined => {
  const method_result = methodCheck(method, ["add", "remove", "toggle", "get"]);
  if (method_result == true) {
    if (
      typeof className == "string" ||
      (method == "get" && typeof className == "undefined")
    ) {
      if (typeof selector == "string" || typeof selector == "object") {
        const element: NodeListOf<HTMLElement> | undefined = element_select(
          selector
        );
        if (typeof element == "object") {
          if (method == "get") {
            let ClassListArray: Array<object> = [];
            interface classObjectConstructor {
              Element: HTMLElement;
              ClassList: DOMTokenList | undefined;
            }
            element.forEach((element_single: HTMLElement) => {
              let classList = classMethod(element_single, method, className);
              let classobject: classObjectConstructor = {
                Element: element_single,
                ClassList: classList,
              };
              ClassListArray.push(classobject);
            });
            return ClassListArray;
          } else {
            element.forEach((element_single: HTMLElement) => {
              classMethod(element_single, method, className);
            });
            return undefined;
          }
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
