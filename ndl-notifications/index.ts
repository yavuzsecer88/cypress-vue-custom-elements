import { defineCustomElement } from "vue";
import NdlNotifications from "./NdlNotifications.ce.vue";

export { NdlNotifications };

export function register(tagName = "ndl-notifications") {
  customElements.define(tagName, defineCustomElement(NdlNotifications));
}
