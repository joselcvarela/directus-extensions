<template></template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String,
      default: null,
    },
  },
  setup(props, { attrs }) {
    function waitFor(selector: string): Promise<HTMLIFrameElement> {
      return new Promise((resolve) => {
        const el = document.querySelector(selector) as HTMLIFrameElement | null;

        if (el) {
          return resolve(el);
        }

        const observer = new MutationObserver(() => {
          const el = document.querySelector(
            selector
          ) as HTMLIFrameElement | null;
          if (el) {
            observer.disconnect();
            return resolve(el);
          }
        });

        observer.observe(document.body, { childList: true, subtree: true });
      });
    }

    waitFor(".live-preview iframe").then((iframe: HTMLIFrameElement) => {
      const domains = (
        Array.isArray(attrs?.domains) ? attrs.domains : []
      ).filter((domain) => !!domain);

      const oldSrc = iframe.src;
      iframe.allow = ["local-network-access", ...domains].join(" ");
      iframe.src = "";
      iframe.src = oldSrc;
    });
  },
});
</script>
