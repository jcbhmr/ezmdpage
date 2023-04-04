## Why remove the `<script>` and `<plaintext>` elements from the document?

It has the benefit of not including the `<script>` or `<plaintext>` source code
in any <kbd><kbd>Ctrl</kbd>+<kbd>S</kbd></kbd> browser-saved copies of the
rendered document.

When you <kbd><kbd>Ctrl</kbd>+<kbd>S</kbd></kbd> to save an HTML document in
Chrome or Firefox, it _doesn't_ download the original response that it got over
HTTP to your computer. Instead, it takes a serialized snapshot of the **current
DOM state** and downloads that along with any other subresources.

This means that by removing the `<script>` and `<plaintext>` from the DOM after
rendering, we are effectively making it _appear_ as though the original HTML
file had `<html>` source code instead of `**markdown**`.

## Where's the ESM export of this package?

Since this project is **not intended to be consumed as a library** and is **only
supposed to be used as a classic `<script>` resource** we don't offer any ESM
library bundles. At least, not yet.

If you're interested in contributing such a feature, that's awesome! We'd love
to incorporate it! ❤️

## Why use `main` instead of `exports` in `package.json`?

Because [unpkg.com doesn't support `exports`]. 🤷‍♂️ I want to maintain
compatibility with the most well-known npm CDN because this package is largely
intended for use in the browser with a CDN. If this were a generic library, I
wouldn't worry, but here it matters enough to use the old `main` instead of the
new `exports`.

<!-- prettier-ignore-start -->
[unpkg.com doesn't support `exports`]: https://github.com/mjackson/unpkg/issues/265
<!-- prettier-ignore-end -->
