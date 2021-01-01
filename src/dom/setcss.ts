import element_select from "../utils/element_select";
import propertycheck from "../utils/properycheck";

const setCss = (
  elements: NodeListOf<HTMLElement>,
  property: string | object,
  value?: string
) => {
  const elements_check: NodeListOf<HTMLElement> | undefined = element_select(
    elements
  );
  if (elements_check != undefined) {
    elements_check.forEach(function (element: HTMLElement) {
      propertycheck(element, property, value);
    });
  } else {
    console.error("element is undefined");
  }
};
export default setCss;
