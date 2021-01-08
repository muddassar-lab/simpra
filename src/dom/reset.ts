import element_select from "../utils/element_select";
const resetForm = (selector: string | NodeListOf<HTMLElement>) => {
  const elements = element_select(selector);
  if (elements != undefined) {
    elements.forEach((element) => {
      (<HTMLFormElement>element).reset();
    });
  } else {
    console.error(
      `Element is undefined.The selector paramter you passed is ${selector}`
    );
  }
};
export default resetForm;
