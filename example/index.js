import VueForm from "../src/index";

const vue = new Vue({
  el: "#app",
  data: {
    name: "cecsdfsf",
    id: "",
    gender: "",
    rememberMe: true,
    hobbies: [],
    age: 0,
    major: [],
    isAtSchool: true,
    amount: 0,
    arriveTime: null,
    arriveDate: null,
    arriveDateTime: null,
    studentRate: 0,
    favoriteColor: "",
    selectedLesson: [],
    template: [
      { formItemType: "input", label: "姓名", value: "name" },
      {
        formItemType: "select",
        label: "学号",
        value: "id",
        options: [{ label: "学号1", value: "1" }]
      },
      {
        formItemType: "radio",
        label: "性别",
        value: "gender",
        options: [{ label: "男" }, { label: "女" }]
      },
      {
        formItemType: "checkbox",
        label: "记住密码",
        value: "rememberMe"
      },
      {
        formItemType: "checkbox-group",
        label: "爱好",
        value: "hobbies",
        options: [{ label: "睡觉" }, { label: "吃饭" }]
      },
      {
        formItemType: "input-number",
        label: "年龄",
        value: "age"
      },
      {
        formItemType: "cascader",
        label: "专业",
        value: "major",
        options: [
          {
            value: "jisuanji",
            label: "计算机学院",
            children: [
              { value: "ruanjian", label: "软件工程" },
              { value: "jisuanjikexue", label: "计算机科学" }
            ]
          }
        ]
      },
      {
        formItemType: "switch",
        label: "是否在校",
        value: "isAtSchool",
        "active-text": "在校",
        "inactive-text": "不在校"
      },
      {
        formItemType: "slider",
        label: "金额",
        value: "amount",
        min: 0,
        max: 10000
      },
      {
        formItemType: "time-select",
        label: "到校时间",
        value: "arriveTime"
      },
      {
        formItemType: "date-picker",
        label: "到校日期",
        value: "arriveDate"
      },
      {
        formItemType: "date-picker",
        label: "到校日期时间",
        value: "arriveDateTime",
        type: "datetime"
      },
      {
        formItemType: "upload",
        label: "头像上传",
        action: "http://www.baidu.com"
      },
      {
        formItemType: "rate",
        label: "学生评分",
        value: "studentRate"
      },
      {
        formItemType: "color-picker",
        label: "喜欢的颜色",
        value: "favoriteColor"
      },
      {
        formItemType: "transfer",
        label: "选课",
        value: "selectedLesson",
        data: [
          { key: 1, label: "语文" },
          { key: 2, label: "数学" },
          { key: 3, label: "英语" },
          { key: 4, label: "物理" }
        ]
      }
    ]
  },
  components: {
    VueForm
  }
});
