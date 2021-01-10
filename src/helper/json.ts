import methodCheck from "../utils/methodCheck";
const json = (
  variable: string,
  method: string
): string | object | undefined => {
  if (typeof variable == "string" || typeof variable == "object") {
    if (typeof method == "string") {
      if (methodCheck(method, ["s", "p"])) {
        if (method === "s") {
          var jsonString: string = JSON.stringify(variable);
          return jsonString;
        } else if (method == "p") {
          var jsonParse: object = JSON.parse(variable);
          return jsonParse;
        }
      } else {
        console.error(
          `supported methods are ['s','p'].The method parameter you passed is ${method}`
        );
      }
    } else {
      console.error(
        `passed method paramter should be string. The parameter you passed is ${method}`
      );
    }
  } else {
    console.error(
      `passed variable paramter should be string or object. The parameter you passed is ${variable}`
    );
  }
};
export default json;
