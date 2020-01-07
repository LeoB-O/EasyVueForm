import renderFormItemContent from "../render/renderFormItemContent";

export default {
  name: "VueFormItem",
  props: {
    formItemType: String,
    label: String,
    value: [String, Number, Boolean, Array],
    options: Array
  },
  render: function(h) {
    console.log(this.$attrs);
    return h(
      "el-form-item",
      {
        props: {
          label: this.label
        }
      },
      [...renderFormItemContent.call(this, h, this.formItemType)]
    );
  }
};
