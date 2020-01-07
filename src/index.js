import VueFormItem from "./components/VueFormItem";

export default {
  name: "VueForm",
  components: {
    VueFormItem
  },
  props: {
    template: [Array, Object],
    data: Object
  },
  render: function(h) {
    return h(
      "el-form",
      {
        props: {
          ...this.$attrs
        }
      },
      this.template.map(item =>
        h("VueFormItem", {
          // TODO props 和 attrs有什么区别？
          // props: {
          //   type: item.type,
          //   label: item.label,
          //   value: this.data[item.value],
          //   options: item.options
          // },
          attrs: {
            ...item,
            type: item.type,
            label: item.label,
            value: this.data[item.value],
            options: item.options,
            value: this.data[item.value]
          },
          on: { input: e => (this.data[item.value] = e) }
        })
      )
    );
  }
};
