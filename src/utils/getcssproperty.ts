const getcssproperty = (
  elements: NodeListOf<HTMLElement>,
  property?: string | Array<string>
): Array<CSSStyleDeclaration> | Array<object> | undefined => {
  if (property == undefined) {
    let styleArray: Array<CSSStyleDeclaration> = [];
    elements.forEach((element) => {
      styleArray.push(element.style);
    });
    return styleArray;
  } else if (Array.isArray(property)) {
    let styleArray: Array<object> = [];
    interface propertyObjConstructor {
      propertyName: string;
      propertyValue: string;
    }
    interface elementpropriesconstructor {
      Element: HTMLElement;
      Properties: Array<propertyObjConstructor>;
    }
    elements.forEach((element) => {
      let element_properties_object: elementpropriesconstructor = {
        Element: element,
        Properties: [],
      };
      property.forEach((singleProperty) => {
        element_properties_object.Properties.push({
          propertyName: singleProperty,
          propertyValue: element.style.getPropertyValue(singleProperty),
        });
      });
      styleArray.push(element_properties_object);
    });
    return styleArray;
  } else if (typeof property == "string") {
    let styleArray: Array<object> = [];
    interface propertyObjConstructor {
      Element: HTMLElement;
      propertyName: string;
      propertyValue: string;
    }

    elements.forEach((element: HTMLElement) => {
      let propertyobj: propertyObjConstructor = {
        Element: element,
        propertyName: property,
        propertyValue: element.style.getPropertyValue(property),
      };
      styleArray.push(propertyobj);
    });
    return styleArray;
  }
  return undefined;
};
export default getcssproperty;
