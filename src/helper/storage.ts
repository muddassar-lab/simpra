import methodCheck from "../utils/methodCheck";
const storage = (
  method: string,
  variable?: string,
  value?: string | number
): number | string | null | undefined => {
  if (typeof variable == "string" || variable == undefined) {
    if (typeof method == "string") {
      if (methodCheck(method, ["g", "s", "r", "c", "l"])) {
        if (
          variable == undefined &&
          value == undefined &&
          (method == "c" || method == "l")
        ) {
          if (method == "c") {
            localStorage.clear();
          } else if (method == "l") {
            return localStorage.length;
          }
        }
        if (
          value == undefined &&
          typeof variable == "string" &&
          (method == "g" || method == "r")
        ) {
          if (method == "g") {
            return localStorage.getItem(variable);
          } else if (method == "r") {
            localStorage.removeItem(variable);
          }
        }
        if (method == "s" && variable != undefined && value != undefined) {
          localStorage.setItem(variable, value.toString());
        }
      } else {
        console.error(
          `supported methods are ['a','s','r'].The method parameter you passed is ${method}`
        );
      }
    } else {
      console.error(`passed method paramter should be string.The method parameter
    you passed is ${method}`);
    }
  } else {
    console.error(`passed variable paramter should be string or undefiend.The variable parameter
    you passed is ${variable}`);
  }
};
export default storage;
