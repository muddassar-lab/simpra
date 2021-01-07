const emailCheck = (emailAddress: string): Boolean | undefined => {
  if (typeof emailAddress == "string") {
    const checkString = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return checkString.test(emailAddress);
  } else {
    console.error("email address passed should be string");
    return undefined;
  }
};
export default emailCheck;
