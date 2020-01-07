export default function renderUpload(h) {
  return [
    h(
      "el-upload",
      {
        props: {
          ...this.$attrs
        }
      },
      [h("el-button", { domProps: { innerText: "点击上传" } })]
    )
  ];
}
