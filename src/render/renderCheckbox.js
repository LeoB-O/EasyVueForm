export default function renderCheckbox(h) {
  let options = this.options || [];
  options = options.map(checkbox =>
    h("el-checkbox", { props: { ...checkbox, label: checkbox.label } })
  );
  return (
    (options.length > 0 && options) || [
      h("el-checkbox", {
        props: {
          ...this.$attrs,
          value: this.value
        },
        on: {
          input: e => this.$emit("input", e)
        }
      })
    ]
  );
}
