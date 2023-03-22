This project abuses the `<plaintext>` tag to prevent parsing of Markdown text as
HTML code, and then uses a `<script>` tag to post-process the `<plaintext>` tag
into a DOM object which is then rendered to the page. If for some reason an
error occurs, the original `<plaintext>` source code will still be shown!
