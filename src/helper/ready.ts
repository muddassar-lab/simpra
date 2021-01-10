const readyDom = (callBack: Function) => {
  document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      callBack();
    }
  };
};
export default readyDom;
