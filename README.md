# `.md.html`

📝 Write raw Markdown in `.md.html` files that gets auto-rendered everywhere \
🔀 Forked from [morgan3d/markdeep]

<div align="center">

![](https://placekitten.com/600/400)

</div>

📂 Renders `file:///document.html` pages \
🏝️ Works offline (when inlined) \
📜 Failsafe text fallback when `<script>` is unavailable

👀 You might also be looking for a Markdown custom element like
[@polymer/marked-element].

## Installation

![jsDelivr](https://img.shields.io/static/v1?style=for-the-badge&message=jsDelivr&color=E84D3D&logo=jsDelivr&logoColor=FFFFFF&label=)

⚠️ This project is intended to be sourced directly from a `<script src="...">`
script tag with no other content on the page.

Just add this code to the very top of your page:

<!-- prettier-ignore -->
```html
<script src="https://unpkg.com/@jcbhmr/md-html"></script><plaintext>
```

🎨 Make sure you set your autoformatter like Prettier to associate `.md.html`
files with Markdown! They should still work like normal; the
`<script><plaintext>` prefix won't affect anything.

🏝️ If you want to install this for use offline, the recommended way is to
download [the latest `jcbhmr-md-html.min.js` file] and do something like this:

```
file:///home/you/Documents/try-md-html/
├── jcbhmr-md-html.min.js
└── Your_super_cool_document.md.html
```

<!-- prettier-ignore -->
```html
<script src="jcbhmr-md-html.min.js"></script><plaintext>
```

⚙️ If you really want it to all be in one file you _can_ inline the JavaScript
code using something like [remy/inliner]. Be warned that this could make it more
difficult to edit the actual Markdown part of the document. If you do this, it's
recommended to **turn off "Word wrap"** so that you can let the top few lines of
JavaScript mostly be offscreen without wrapping and taking up too much space.

## Usage

![Browser](https://img.shields.io/static/v1?style=for-the-badge&message=Browser&color=4285F4&logo=Google+Chrome&logoColor=FFFFFF&label=)

After adding the `<script>` and `<plaintext>` tags to your `.md.html` file, you
can get started editing your document in ernest! You can use any relgular old
text editor to compose your markdown; even Windows Notepad works great,
especially when you split your screen into two windows: half Chrome and half
Notepad! It even works with local `file:` URLs, so you can just email or share a
plain `.html` file with someone, and they will be able to open and view it.

```md
<script src="https://unpkg.com/@jcbhmr/md-html"></script><plaintext>

# Hello world!

This is my **Markdown document**! There's some <mark>HTML</mark> elements in
here <u>too</u> since Markdown supports _inline HTML_.
```

✨ You can use all the features of GitHub Flavored Markdown!

```md
<script src="https://unpkg.com/@jcbhmr/md-html"></script><plaintext>

| This is a test |
| -------------- |
| I'm a table!   |
```

➕ If you want a more full-featured Markdown editing toolkit, checkout
[StackEdit] or [Dillinger.io]. ❤️

### Exporting your rendered document

When you view a `.md.html` file in your browser, you can open up the DevTools
console in Chrome or Firefox using <kbd>F12</kbd> to be greeted by some lovely
instructions on how to export your rendered document if you choose.

<details>
  <summary>Exerpt from the DevTools console</summary>

TODO: Add excerpt here

</details>

## Development

![TypeScript](https://img.shields.io/static/v1?style=for-the-badge&message=TypeScript&color=3178C6&logo=TypeScript&logoColor=FFFFFF&label=)
![Vite](https://img.shields.io/static/v1?style=for-the-badge&message=Vite&color=646CFF&logo=Vite&logoColor=FFFFFF&label=)

This project is a relatively simplistic wrapper around [Marked], a GitHub
Flavored Markdown renderer. We compile it to a UMD `.min.js` file for use in a
classic `<script>` tag. 🔮 In the future, we want to use [Storybook] to make the
demos more interactive! If you have Storybook knowhow, we'd love your
assistance! ❤️

<!-- prettier-ignore-start -->
[@polymer/marked-element]: https://www.webcomponents.org/element/@polymer/marked-element
[morgan3d/markdeep]: https://github.com/morgan3d/markdeep#readme
[remy/inliner]: https://github.com/remy/inliner#readme
[stackedit]: https://stackedit.io/
[dillinger.io]: https://dillinger.io/
[the latest `jcbhmr-md-html.min.js` file]: https://github.com/jcbhmr/md-html/releases/latest
[marked]: https://marked.js.org/
<!-- prettier-ignore-end -->
