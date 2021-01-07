import csspropertyset from "./csspropertyset";
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
export default propertycheck;
