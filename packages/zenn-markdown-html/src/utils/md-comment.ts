// コメントでは一部のHTMLのみ許可する
import { customRendererFence } from "./plugin-md-custom";
const commentMd = require("markdown-it")({
  breaks: true,
  linkify: true,
});

commentMd
  .use(require("markdown-it-prism"))
  .use(customRendererFence)
  .use(require("markdown-it-link-attributes"), {
    pattern: /^(?!https:\/\/zenn\.dev\/)/,
    attrs: {
      target: "_blank",
      rel: "nofollow noreferrer noopener",
    },
  })
  .disable(["image", "table", "heading"]);

export default commentMd;
