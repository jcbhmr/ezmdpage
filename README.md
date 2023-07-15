# Easy self-rendering Markdown pages

📝 Write raw Markdown in `.html` files that gets auto-rendered everywhere \
💡 Inspired by [markdeep]

<div align="center">

![](https://github.com/togajam/ezmdpage/assets/61068799/6272eb94-1b39-4e5b-9bea-9257b2e2c4b9)

<!-- prettier-ignore -->
[Test page](https://togajam.github.io/ezmdpage/)
| [ezmdpage & Alpine.js](https://togajam.github.io/ezmdpage/alpinejs.html)
| [ezmdpage & Vue.js](https://togajam.github.io/ezmdpage/vuejs.html)

</div>

📂 Works with `file:///document.html` documents \
📜 Failsafe text fallback when JavaScript is disabled \
🎨 Styled using GitHub's Markdown CSS \
🏝️ Works offline!

## Installation

![unpkg.com](https://img.shields.io/static/v1?style=for-the-badge&message=unpkg.com&color=EFEFEF&logo=Udemy&logoColor=8B4513&label=)
![jsDelivr](https://img.shields.io/static/v1?style=for-the-badge&message=jsDelivr&color=E84D3D&logo=jsDelivr&logoColor=FFFFFF&label=)

You can <kbd><kbd>Ctrl</kbd>+<kbd>S</kbd></kbd> [the `ezmdpage.min.js` file] to
download it and load it locally (for offline use) or use an npm CDN like
[unpkg.com] or [jsDelivr] to load it from the web:

<!-- prettier-ignore -->
```html
<script src="ezmdpage.min.js"></script><plaintext>
<script src="https://unpkg.com/ezmdpage@2"></script><plaintext>
<script src="https://cdn.jsdelivr.net/npm/ezmdpage@2"></script><plaintext>
```

<details><summary>💡 You may also configure your formatter & editor</summary>

To get the best editing experience, you can configure Prettier or your other
favorite formatter to use its Markdown parser/beautifier on `.html` files.

```jsonc
// package.json
{
  "prettier": {
    "overrides": [
      {
        "files": ["*.html"],
        "options": {
          "parser": "markdown"
        }
      }
    ]
  }
}
```

💡 You can also use a custom suffix like `.ezmdpage.html` or something if you
have other non-ezmdpage HTML content in your workspace too.

⚛️ To get proper syntax highlighting in VS Code, you'll need to configure it to
use its Markdown mode for `.html` files. You can do this by adding this to your
`.vscode/settings.json` file:

```jsonc
{
  "files.associations": {
    "*.html": "markdown"
  }
}
```

</details>

⚠️ This project is intended to be used on a plain HTML page. It may not work
with other non-Markdown content on the page.

## Usage

![Markdown](https://img.shields.io/static/v1?style=for-the-badge&message=Markdown&color=000000&logo=Markdown&logoColor=FFFFFF&label=)
![Browser](https://img.shields.io/static/v1?style=for-the-badge&message=Browser&color=4285F4&logo=Google+Chrome&logoColor=FFFFFF&label=)

After adding the magic `<script>` to your `.md.html` file, you can get started
editing your document in ernest! You can use any relgular old text editor to
compose your markdown; even Windows Notepad works great! ezmdpage even works
with local `file:` URLs: you can just email or share a plain `.html` file with
someone, and they will be able to open and view it.

````md
<script src="https://unpkg.com/ezmdpage@2"></script><plaintext>

# Hello world!

This is my **Markdown document**! There's some <mark>HTML</mark> elements in
here <u>too</u> since Markdown supports _inline HTML_.

| Look at this cool 😎 GFM table! | Wow!                |
| ------------------------------- | ------------------- |
| We can even do math!            | $ax^2 + bx + c = 0$ |

```js
console.log("Code highlighting works too!");
```

> All other Markdown features work as expected.

<script>
  // You can even use <script> tags! There's NO SAFETY FILTER for HTML elements.
  const html = `<p>It's ${new Date().toLocaleTimeString()}!</p>`;
  document.body.append(document.createRange().createContextualFragment(html));
</script>
````

🤩 For more cool examples like using [Alpine.js with ezmdpage], check out [the
GitHub Pages site] which hosts the `test/` folder demos!

## Development

![JavaScript](https://img.shields.io/static/v1?style=for-the-badge&message=JavaScript&color=222222&logo=JavaScript&logoColor=F7DF1E&label=)
![CSS](https://img.shields.io/static/v1?style=for-the-badge&message=CSS&color=1572B6&logo=CSS3&logoColor=FFFFFF&label=)
![Vite](https://img.shields.io/static/v1?style=for-the-badge&message=Vite&color=646CFF&logo=Vite&logoColor=FFFFFF&label=)

This project uses [Vite] to create a IIFE bundle of all the CSS and JavaScript
that gets injected into the page. It's basically just [Marked] & [HighlightJS].
We use [vite-plugin-css-injected-by-js] to inline the CSS into the JavaScript
bundle.

ℹ Note that we use the `main` field in `package.json` and not the new `exports`
field. This is because [unpkg.com] doesn't support the new `exports` field. See
[mjackson/unpkg#265]. unpkg.com is the most popular CDN for non-ESM npm
packages, so it makes sense to bend over backwards to support it.

<!-- prettier-ignore-start -->
[markdeep]: https://casual-effects.com/markdeep/
[marked]: https://marked.js.org/
[highlightjs]: https://highlightjs.org/
[mjackson/unpkg#265]: https://github.com/mjackson/unpkg/issues/265
[vite]: https://vitejs.dev/
[unpkg.com]: https://unpkg.com/
[jsdelivr]: https://www.jsdelivr.com/
[vite-plugin-css-injected-by-js]: https://github.com/marco-prontera/vite-plugin-css-injected-by-js#readme
[alpine.js with ezmdpage]: https://togajam.github.io/ezmdpage/alpinejs.html
[the github pages site]: https://togajam.github.io/ezmdpage/
[the `ezmdpage.min.js` file]: https://togajam.github.io/ezmdpage/ezmdpage.min.js
<!-- prettier-ignore-end -->
