import renderOptions from "./renderOptions";

export default function renderDefault(h) {
  return [
    h(
      `el-${this.formItemType}`,
      {
        props: {
          ...this.$attrs,
          value: this.value,
          options: this.options
        },
        on: {
          input: e => {
            this.$emit("input", e);
          }
        }
      },
      renderOptions.call(this, h, this.options)
    )
  ];
}
