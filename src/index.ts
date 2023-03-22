// @ts-ignore
import consoleMessage from "./consoleMessage.txt?raw";
import { pEvent } from "p-event";
import { marked } from "marked";

const script = document.currentScript;

async function main(): Promise<any> {
  document.body.hidden = true;

  await pEvent(document, "DOMContentLoaded");

  const plaintext = document.querySelector("plaintext");
  if (!plaintext) {
    document.body.hidden = false;
    console.error();
    return;
  }

  script.remove();
  plaintext.remove();

  const md = plaintext.textContent;
  const html = marked(md);

  document.body.innerHTML = html;
  document.body.hidden = false;

  document.title = document.querySelector("h1")?.innerText ?? "";

  document.head.insertAdjacentHTML("afterbegin", "<meta charset='UTF-8' />");
  document.head.insertAdjacentHTML(
    "beforeend",
    "<meta name='viewport' content='width=device-width, initial-scale=1' />"
  );
}

main();
