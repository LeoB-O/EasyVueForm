export default function renderOptions(h, options) {
  return (
    (this.formItemType == "select" &&
      options &&
      options.map(option =>
        h("el-option", {
          props: {
            ...option
          }
        })
      )) ||
    []
  );
}
