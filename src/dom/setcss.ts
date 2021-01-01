import element_select from "../utils/element_select";
const setCss = (
  elements: NodeListOf<HTMLElement>,
  property: string | object,
  value?: string
) => {
  const csspropertyset = (
    element: HTMLElement,
    property: string,
    value: string
  ) => {
    element.style.setProperty(property, value);
  };
  const propertycheck = (
    element: HTMLElement,
    property: string | object,
    value?: string
  ) => {
    if (typeof property == "string" && typeof value == "string") {
      csspropertyset(element, property, value);
    } else if (typeof property == "object" && value == undefined) {
      for (const [key, value] of Object.entries(property))
        csspropertyset(element, key, value);
    }
  };

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
