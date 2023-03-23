import { pEvent } from "p-event";
import { marked } from "marked";
import "./index.scss";
import "console.style";
// @ts-ignore
import consoleMessage from "./consoleMessage.txt?raw";

declare var consoleMessage: string;

declare global {
  interface Console {
    style(xmlLike: string): void;
  }
}

const script = document.currentScript!;

async function main(): Promise<any> {
  document.documentElement.hidden = true;
  try {
    if (document.readyState === "loading") {
      await pEvent(document, "DOMContentLoaded");
    }

    const plaintext = document.querySelector("plaintext");
    if (!plaintext) {
      throw new Error("No <plaintext> element found.");
    }

    const html = marked(plaintext.textContent!);
    const fragment = document.createRange().createContextualFragment(html);

    document.body.classList.add("markdown-body");
    plaintext.replaceWith(fragment);
    script.remove();

    const headHTML = `
      <meta charset="UTF-8" />
      <title>${document.querySelector("h1")?.textContent ?? "Document"}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    `;
    document.head.insertAdjacentHTML("afterbegin", headHTML);

    console.style(consoleMessage);
  } finally {
    document.documentElement.hidden = false;
  }
}

main();
