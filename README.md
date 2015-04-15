# base-tag-anchor-polyfill

A polyfill to prepend anchor's hash with location.href. The polyfill gets applied only to anchor tags whose hash starts
with # (hash sign) and when a base tag is used by the application.


# Dependencies

- none

# Usage

Add a script tag to the library.

```html
<script src="./base-tag-anchor-polyfill.js"></script>
```

# What are we solving?

Base tag (http://www.w3.org/TR/html-markup/base.html) provides a base for resolving the relative URLs in a web application.
While its awesome in routing an application to a specified base path, it causes issues while using anchor tags. Below is an example
of how the URLs are affected.

Given:

-   Application URL: http://www.example.com/map
-   Base tag href : http://www.example.com/map/version1/

<table>
    <thead>
    <tr>
        <td>Anchor Href</td>
        <td>Expected URL</td>
        <td>Actual URL</td>
    </tr>
    </thead>


    <tbody>
    <tr>
        <td>href="#/cities"</td>
        <td>http://www.example.com/map/#/cities</td>
        <td>http://www.example.com/map/version1/#/cities</td>
    </tr>
    </tbody>

</table>

# Examples

Look for a basic and advanced example demonstrating the issue.

# Issue References

-   http://tjvantoll.com/2013/02/17/using-jquery-ui-tabs-with-the-base-tag/
-   http://www.ninthavenue.com.au/blog/using-base-href-with-anchors


# Building the app

Build the app (runs clean, test, build)

```sh
$ gulp --ENV=prod
```

Running Tests:

```sh
$ gulp test
```
