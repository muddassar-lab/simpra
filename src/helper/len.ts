const len = (variable: string | Array<any> | object): number | undefined => {
  if (
    typeof variable == "string" ||
    Array.isArray(variable) ||
    typeof variable == "object"
  ) {
    if (typeof variable == "string") {
      return variable.length;
    } else if (typeof variable == "object") {
      return Object.keys(variable).length;
    } else if (Array.isArray(variable)) {
      return (<Array<any>>variable).length;
    }
  } else {
    console.error(`variable paramter passed should be either string,array or object.The variable parameter
    you passed is ${variable}`);
    return undefined;
  }
};
export default len;
