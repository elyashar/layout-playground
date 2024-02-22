# Font Awesome

[Font Awesome](https://fontawesome.com/) is the Internet's icon library and toolkit, used by millions of designers, developers, and content creators.

There are several versions available, but in this case I used [Font Awesome 4](https://fontawesome.com/v4/) which has 675 Free Icons.

> The version that you use is important, because there may be slight differences in how to use the library.

## How to Use

There are several ways of [using Font Awesome](https://fontawesome.com/v4/get-started/) in our code base:

- Using a [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) is the easiest one, because we don't have to download any files and keep track of them; it's just a matter of adding the links in the `head` of our HTML.
- **Downloading** the files, and including them in our source code.

> Using the **CDN** methos is better, but they were asking me to enter my email to get the links, so I decided to give it a go to download the files.

## Downloaded Files

We just have to download the zip file including all the assets:

- A `css` folder containing the stylesheets.
- A `fonts` folder containing the icons.
- A `less` folder containing the stylesheets in [LESS](https://lesscss.org/) format.
- A `scss` folder containing the stylesheets in [SASS](https://sass-lang.com/) format.

From all this, we can remove the `less` and the `scss` folders, since we're not gonna use these formats right now.

> Also, if you're gonna use just the **minimized** version of the stylesheet, you can get rid of the other one.

### The `fonts` folder

> **TLDR** Only use [WOFF2](https://en.wikipedia.org/wiki/Web_Open_Font_Format), or if you need legacy support, WOFF. Do not use any other format

Regarding the `fonts` folder included in Font Awesome, for version **4.7.0** we end up with the following fonts:

- fontawesome-webfont.eot
- fontawesome-webfont.svg
- fontawesome-webfont.ttf
- fontawesome-webfont.woff
- fontawesome-webfont.woff2

> From: https://stackoverflow.com/questions/11002820/why-should-we-include-ttf-eot-woff-svg-in-a-font-face?rq=3

(svg and eot are dead formats, ttf and otf are full system fonts, and should not be used for web purposes)

Original answer from 2012:
In short, font-face is very old, but only recently has been supported by more than IE.

eot is needed for Internet Explorers that are older than IE9 - they invented the spec, but eot was a proprietary solution.

ttf and otf are normal old fonts, so some people got annoyed that this meant anyone could download expensive-to-license fonts for free.

Time passes, SVG 1.1 adds a "fonts" chapter that explains how to model a font purely using SVG markup, and people start to use it. More time passes and it turns out that they are absolutely terrible compared to just a normal font format, and SVG 2 wisely removes the entire chapter again.

Then, woff gets invented by people with quite a bit of domain knowledge, which makes it possible to host fonts in a way that throws away bits that are critically important for system installation, but irrelevant for the web (making people worried about piracy happy) and allows for internal compression to better suit the needs of the web (making users and hosts happy). This becomes the preferred format.

2019 edit A few years later, woff2 gets drafted and accepted, which improves the compression, leading to even smaller files, along with the ability to load a single font "in parts" so that a font that supports 20 scripts can be stored as "chunks" on disk instead, with browsers automatically able to load the font "in parts" as needed, rather than needing to transfer the entire font up front, further improving the typesetting experience.

If you don't want to support IE 8 and lower, and iOS 4 and lower, and android 4.3 or earlier, then you can just use WOFF (and WOFF2, a more highly compressed WOFF, for the newest browsers that support it.)


---
[:arrow_backward:][back] ║ [:house:][home] ║ [:arrow_forward:][next]

<!-- navigation -->
[home]: ../README.md
[back]: ../flexbox.md
[next]: #