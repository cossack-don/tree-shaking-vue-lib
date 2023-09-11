import "./UiInput.css";
import { defineComponent as u, openBlock as a, createElementBlock as p, normalizeClass as i } from "vue";
import { _ as d } from "../_plugin-vue_export-helper-dad06003.js";
const r = ["value", "disabled"], m = /* @__PURE__ */ u({
  __name: "UiInput",
  props: {
    modelValue: null,
    isDisabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: l }) {
    const e = s;
    return (o, t) => (a(), p("input", {
      type: "text",
      value: e.modelValue,
      disabled: e.isDisabled,
      class: i(o.$style.input),
      onInput: t[0] || (t[0] = (n) => l("update:modelValue", n.target.value))
    }, null, 42, r));
  }
}), c = "_input_s9lo8_2", _ = {
  input: c
}, f = {
  $style: _
}, V = /* @__PURE__ */ d(m, [["__cssModules", f]]);
export {
  V as default
};
