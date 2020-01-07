import renderDefault from "./renderDefault";
import renderRadio from "./renderRadio";
import renderCheckbox from "./renderCheckbox";
import renderCheckboxGroup from "./renderCheckboxGroup";
import renderUpload from "./renderUpload";

const strat = {
  radio: renderRadio,
  checkbox: renderCheckbox,
  "checkbox-group": renderCheckboxGroup,
  default: renderDefault,
  upload: renderUpload
};

export default function renderFormItemContent(h, formItemType) {
  const useStrat = strat[formItemType] || strat.default;
  return useStrat.call(this, h);
}
