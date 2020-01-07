export default function renderRadio(h) {
  return this.options.map(radio =>
    h("el-radio", {
      props: {
        ...radio,
        label: radio.label,
        value: this.value
      },
      on: {
        input: e => {
          this.$emit("input", e);
        }
      }
    })
  );
}
