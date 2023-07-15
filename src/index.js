import { marked } from "marked";
import "./index.css";

const script = document.currentScript;

async function main() {
  document.documentElement.hidden = true;
  try {
    if (document.readyState === "loading") {
      await new Promise((r) =>
        document.addEventListener("DOMContentLoaded", r, { once: true })
      );
    }

    const plaintext = document.querySelector("plaintext");
    if (!plaintext) {
      throw new DOMException("No <plaintext> element found", "NotFoundError");
    }

    const html = marked(plaintext.textContent);
    const fragment = document.createRange().createContextualFragment(html);

    plaintext.replaceWith(fragment);
    script.remove();
    document.body.classList.add("markdown-body");

    document.title = document.querySelector("h1")?.innerText ?? "Document";
    const headHTML = `
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    `;
    document.head.insertAdjacentHTML("afterbegin", headHTML);

    // This will FAIL if the user isn't online. That's OK. They won't get pretty
    // syntax highlighting, but they'll still get the content. That's acceptable
    // (for now). Hopefully this will change to be all-in-one in the future.
    const highlightHTML = `
      <link rel="stylesheet" media="(prefers-color-scheme: light)" href="https://unpkg.com/@highlightjs/cdn-assets@11/styles/github.min.css" />
      <link rel="stylesheet" media="(prefers-color-scheme: dark)" href="https://unpkg.com/@highlightjs/cdn-assets@11/styles/github-dark.min.css" />
      <script src="https://unpkg.com/@highlightjs/cdn-assets@11/highlight.min.js" onload="hljs.highlightAll()"></script>
    `;
    // https://stackoverflow.com/a/57211379/19522682
    document.head.append(
      document.createRange().createContextualFragment(highlightHTML)
    );
  } finally {
    document.documentElement.hidden = false;
  }
}
main();
