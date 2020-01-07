import renderCheckbox from "./renderCheckbox";

export default function renderCheckboxGroup(h) {
  return [
    h(
      "el-checkbox-group",
      {
        props: {
          ...this.$attrs,
          value: this.value
        },
        on: {
          input: e => this.$emit("input", e)
        }
      },
      renderCheckbox.call(this, h)
    )
  ];
}
