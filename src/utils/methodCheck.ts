const methodCheck = (method: string, methodList: string[]): boolean => {
  if (typeof method == "string") {
    if (Array.isArray(methodList)) {
      if (methodList.includes(method)) {
        return true;
      } else {
        return false;
      }
    } else {
      console.error(
        `methodList paramter should be an array.The methodList you passed is ${methodList}`
      );
      return false;
    }
  } else {
    console.error(
      `method parameter should be string.The method you passed is ${method}`
    );
    return false;
  }
};
export default methodCheck;
