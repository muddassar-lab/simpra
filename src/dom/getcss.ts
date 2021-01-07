import element_select from "../utils/element_select";
import getcssproperty from "../utils/getcssproperty";

const getCss = (
  selector: string | NodeListOf<HTMLElement>,
  property?: string | Array<string>
): Array<CSSStyleDeclaration> | Array<object> | undefined => {
  const element_check = element_select(selector);
  if (element_check != undefined) {
    const cssstyle = getcssproperty(element_check, property);
    return cssstyle;
  } else {
    console.error(`${element_check} is undefined`);
  }
};
export default getCss;
