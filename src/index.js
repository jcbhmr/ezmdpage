import "./ghcode.css";
import "./ghmd.css";
import { marked } from "marked";
import hljs from "highlight.js";

document.write(
  `<plaintext style="display: none !important" id="ezmdpage-plaintext">`
);
document.addEventListener("DOMContentLoaded", () => {
  const plaintext = document.getElementById("ezmdpage-plaintext");
  const html = marked(plaintext.textContent);
  const fragment = document.createRange().createContextualFragment(html);
  document.body.append(fragment);
  plaintext.remove();
  hljs.highlightAll();
});
