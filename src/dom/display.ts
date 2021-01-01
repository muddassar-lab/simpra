import element_select from "../utils/element_select";
import methodCheck from "../utils/methodCheck";
import setCss from "./setcss";
const display = (
  method: string,
  selector: string | NodeListOf<HTMLElement>
) => {
  if (methodCheck(method, ["show", "hide"]) == true) {
    const element = element_select(selector);
    if (element != undefined) {
      if (method == "show") {
        setCss(element, "display", "block");
      } else if (method == "hide") {
        setCss(element, "display", "none");
      }
    } else {
      console.error(`${selector} is undefined`);
    }
  }
};
export default display;
