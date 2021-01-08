const isEmpty = (
  variableToCheck: String | Array<any> | object
): Boolean | undefined => {
  if (typeof variableToCheck === "string") {
    if (variableToCheck) {
      return false;
    } else {
      return true;
    }
  } else if (Array.isArray(variableToCheck)) {
    if (variableToCheck.length > 0) {
      return false;
    } else {
      return true;
    }
  } else if (typeof variableToCheck === "object") {
    if (Object.keys(variableToCheck).length === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    console.error(
      `Passed paramter should be either string or object or array.The parameter you passed is ${variableToCheck}`
    );
    return undefined;
  }
};
export default isEmpty;
