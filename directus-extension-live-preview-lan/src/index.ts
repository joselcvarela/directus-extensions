import { defineInterface } from "@directus/extensions-sdk";
import InterfaceComponent from "./interface.vue";

export default defineInterface({
  id: "live-preview-lan",
  name: "Live Preview LAN",
  icon: "language",
  description:
    "Interface helper to load resources from Local Network within Live Preview",
  component: InterfaceComponent,
  options: [
    {
      field: "domains",
      name: "Domains",
      type: "string",
      meta: {
        width: "full",
        interface: "tags",
        note: 'Specify allowed domains. <a href="https://wicg.github.io/local-network-access/">Learn more</a>',
        options: {
          placeholder: "Add a domain and press enter",
        },
      },
    },
  ],
  types: ["string"],
});
