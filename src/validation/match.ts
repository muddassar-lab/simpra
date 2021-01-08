const match = (first_string: String, second_string: String): Boolean => {
  if (typeof first_string == "string" && typeof second_string == "string") {
    if (first_string === second_string) {
      return true;
    } else {
      return false;
    }
  } else {
    console.error(
      `match function parameters should be string.The parameters you passed are ${first_string} and ${second_string}`
    );
    return false;
  }
};
export default match;
