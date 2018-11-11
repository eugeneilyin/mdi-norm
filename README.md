<div align="center">
<h1>Normalized material design system icons</h1>

All material design system SVG icons provided as fixed, normalized, minifed, and de-duplicated React components

</div>

<hr />

[![Build Status][build-badge]][build]
[![npm version][npm-version-badge]][npm-version]
[![GitHub license][lib-license-badge]][lib-license]

[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]

## The problem

Standart Google material design [SVG icons][google-md-icons] have lot of drawing issues, unnecessary SVG elements and attributes as well huge amount of duplicates of the same visual icons. Duplicates not even in SVG code but the different SVG code draws the same pixels output.

## This solution

This `mdi-norm` library allows you to embed material design system SVG icons as React components and ensure that only minimal deduplicated SVG code will be included. No external dependencies used, you can override default component with your own and use any favorite css solution to customize icon styles. Special icon properties provided to handle standart material design icon rendering.

## Table of Contents

* [Installation](#installation)
* [Benefits](#benefits)
* [Fixes and Optimizations](#fixes-and-optimizations)
* [Usage](#usage)
  * [Import icons](#import-icons)
  * [Customization](#customization)
  * [Styling](#styling)
  * [Decorative and Semantic icons](#decorative-and-semantic-icons)
  * [Pass icons as props](#pass-icons-as-props)
  * [Themed icons](#themed-icons)
* [Properties](#properties)
* [Change Log](#change-log)
* [Contributors](#contributors)
* [License](#license)

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`.

To install with yarn:
```
yarn add mdi-norm
```

To install with npm:
```
npm install --save mdi-norm
```

## Benefits

* Doesn't depends on any external libraries like `@babel/runtime`
* Tiny base `<Icon />` component overhead (**2,360** bytes minified / **858** bytes gzipped)
* The same codbase used for all icon duplicates which gives _~40%_ SVG code reduction in average
* Code optimized to reduce bundle overhead (special pure function annotations, code reusage, tiny helpers)
* Dynamic theming support for _filled_, _outlined_, _rounded_, _sharp_, and _two-tone_ icon variants (see [themed icons](#themed-icons))
* No `className` prop usage, you can use library with any css framework, library or vanilla css
* Own optimized rendering **NOT** based on `React.PureComponent` or `_pure` from recompose (both approaches are ineffective for icons because always re-render even if props were not changed due to internal createElement calls for `children` prop)
* All [benefits][icon-fonts-vs-svg] of **Inline SVG** compared to **Icon Fonts**
* Your SVG icons will be included into bundle, which is not require separate icon-font file request and load
* Accessibility complaint with **WAI-ARIA** (see [decorative and semantic icons](#decorative-and-semantic-icons))

## Fixes and Optimizations

Compared to official Google system icon set the next fixes, normalization, minification, and de-duplications provided:

* Direct SVG content fixes related to icons rendering: hardcoded opacity, whole-area-filled rectangles, hardcoded fill color, etc. (see all fixed issues [here][issues])
* Removed all elements and attributes not related to rendering, reorder attributes, flattening groups (see all 5,421 optimizations [here][optimizations])
* Identified 1,966 duplicates (about ~38%, details [here][duplicates]) in 5,220 icons based on:
  * Duplicates from equal SVG-code after clearing, normalization, and reordering of SVG elements and attributes
  * Duplicates from same pixels rendering for _different_ SVG-code
  * Duplicates from [Structural Similarity (SSIM)][ssim] cross-validation and compare
  * Duplicates from Visual Similarity computation, sorting and cross-validation for the rest of unique icons for deeper duplicated identification
* All duplicated icons use only the **most compact** SVG code representation
* Manual SVG-code fixes for cases where render coordinates are not pixel-aligned with Google material design icon keylines
> Note: If you take all 1,044 icons from any of five themes in this library they will weight about ~55Kb gzipped which is comparable with material-icons.woff (~57Kb) of material-icons.woff2 (~44Kb) icon fonts. Consider that you never require all of provided 1,044 icons in your bundle this SVG solutions is better optimized then any icon-font approach.

## Usage

Every icon name is prefixed with `Icon` followed by the original name in [Camel Case][camel-case] notation with one of five **optional** theme postfixes at the end.

For example original `kitchen` icon from **filled** theme becomes `IconKitchenFilled`.
Another example is `fitness_center` icon from **two-tone** theme is exported as `IconFitnessCenterTwoTone` and so on.

> Note: One name exception exist: insert_chart_outline**d** icon is named as `IconInsertChartOutline` (without `d` at the end)

### Import icons

The best way for fast compilation time and tree shaking is to use direct import of required ES icon files from `mdi-norm/es/` path:

> Note: Pay attention to brackets, default import is not used

```jsx
import React from 'react'
import { IconMood as Mood } from 'mdi-norm/es/IconMood'
import { IconRoomServiceTwoTone } from 'mdi-norm/es/IconRoomServiceTwoTone'
import { IconRoomServiceRounded } from 'mdi-norm/es/IconRoomServiceRounded'

<Mood theme="sharp" />
<IconRoomServiceTwoTone />
<IconRoomServiceRounded />
```

You also could use `mdi-norm` package directly for icons import, but this can slow down bundle compilation time.
Also this require tree shaking of your bundler (Webpack/Rollup has such feature) or all of 6,264 icons will be included.

```jsx
// Import concrete icons from package (not recomended, use direct import)
import React from 'react'
import { IconPeople as People, IconSpaTwoTone, IconCakeRounded } from 'mdi-norm'

<People theme="sharp" />
<IconSpaTwoTone />
<IconCakeRounded />;
```

You can take **CommonJS** classes from `mdi-norm/lib/` path:

```jsx
const React = require('react');
const { IconMood: Mood } = require('mdi-norm/lib/IconMood');
const { IconRoomServiceTwoTone } = require('mdi-norm/lib/IconRoomServiceTwoTone');
const { IconRoomServiceRounded } = require('mdi-norm/lib/IconRoomServiceRounded');

<Mood theme="outlined" />
<IconRoomServiceTwoTone />
<IconRoomServiceRounded />
```

Also you can import all 6264 icon classes into your bundle (**NOT** recomended):

```jsx
// Import all icons from package (not recomended at all)
import React from 'react'
import * as MDI from 'mdi-norm'

<MDI.IconSpaTwoTone />
```

### Customization

You can change any SVG HTML element property to adjust icon rendering.
To specify `width` and `height` props simultaneously the `size` prop was added (equals to 24 pixels by default).

```jsx
// size property change
<IconSchoolFilled size={48} />

// is equal to 
<IconSchoolFilled width={48} height={48} />

// you can use not only numbers
<IconSchoolFilled size="3rem" />
```

To be aligned with material design [icon color][icon-color] guidelines the default `fill` and `opacity` icons props can be specified by  `state` and `shade` prop values:

| | `shade="on-light"` **(default)** | `shade="on-dark"` |
| :--- | :---- | :---- |
| `state="focused"` | `opacity=".87"`, `fill="#000000"` | `opacity="1"`, `fill="#FFFFFF"` |
| `state="active"` **(default)** | `opacity=".54"`, `fill="#000000"` | `opacity=".7"`, `fill="#FFFFFF"` |
| `state="inactive"` | `opacity=".38"`, `fill="#000000"` | `opacity=".5"`, `fill="#FFFFFF"` |
| `state="error"` | `opacity="1"`, `fill="#B00020"` | `opacity="1"`, `fill="#FF6E6E"` |

### Styling

Use any `className` or `style` props to override icon fill, opacity with any of your favorite css framework or library:

For icon coloring the `fill` SVG property is used:

```css
/* some .css file */
.people-icon {
  fill: 'blue';
}
```

```jsx
import { IconPeopleSharp } from 'mdi-norm/es/IconPeopleSharp'

<IconPeopleSharp className="people-icon" />
```

The same approach applied to override default icon opacity or any other SVG HTML Element property:

```css
.nav-drawer li a:hover .icon,
.nav-drawer li a:focus .icon,
.nav-drawer li a:active .icon {
    opacity: .87;
    height: 1.5rem;
    width: 1.5rem;
    transform: rotate(-2deg);
}
```

If you want your icon to be colored as the outer text use `currentColor` value:

```css
svg {
  fill: currentColor;
}
```

or 

```css
svg.my-special-icon {
  fill: currentColor;
}
```

For RTL (Right-To-Left) icons rendering you can use the next css transform class:

```css
html[dir="rtl"] .icon {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
}
```

The icons required for RTL transformation are listed [here][icons-in-rtl].

### Accessibility: Decorative and Semantic icons

**Decorative** icons are only being used for visual or branding reinforcement. 
If they were removed from the page, users would still understand and be able to use your page. 

**Semantic** icons (like FABs, menu items as icons only, icon buttons, etc.) are ones that you're using to convey meaning, rather than just pure decoration. This includes icons without text next to them used as interactive controls: buttons, form elements, toggles, etc.

By default all icons are rendered as decorative icons with ``aria-hidden`` attribute added to svg HTML element:

```jsx
<svg aria-hidden ...>
  <path d="..." />
<svg/>  
```

If your icons have semantic meaning, you'll need to manually specify `title` prop with related meaning.
For example `<IconCakeRounded title="Add birthday reminder" ... />` icon will be rendered as:

```jsx
<svg role="img" aria-label="title" ...>
  <title>Add birthday reminder</title>
  <path d="..." />
<svg/>  
```

### Pass icons as props

If you want to pass icon as prop to another component or function for rendering make sure that you use upper case first letter in prop name to distinct icon from from standart HTML components:

```jsx
import React from 'react'
import { IconCakeSharp } from 'mdi-norm/es/IconCakeSharp'

const MyCoolLink = ({icon: Icon, text, href}) => <a href={href}><Icon />{text}</a>;

<MyCoolLink icon={IconCakeSharp} text="Cool button" href="/cool" />
```

### Themed icons

By default if no icon theme postfix provided all five themes exported in one React component (usually this is less then five different SVG code bases, due to many existing dulicates of the same icon in different themes).

This gives you an ability to change icon themes dynamically with `theme` prop:

| Icon | Equal themed icon | 
| :--- | :--- |
| `<Icon360Filled />` | `<Icon360 theme="filled" />` or `<Icon360 />` (by default) |
| `<Icon360Outlined />` | `<Icon360 theme="outlined" />` |
| `<Icon360Rounded />` | `<Icon360 theme="rounded" />` |
| `<Icon360Sharp />` | `<Icon360 theme="sharp" />` |
| `<Icon360TwoTone />` | `<Icon360 theme="two-tone" />` |

You can explore all five themes on the official Google's material design [icon set][google-md-icons].

## Properties

All icons internally use tiny (2360 bytes minified, 858 bytes gzipped) `<Icon />` component:

### `size`

`number | string`, defaults to `24`.

The icon size used to set `width` and `height` simultaneously. You can use 20 pixels for dense layouts.

Examples: `48`, `"16px"`, `"2em"`

### `state`

`"focused" | "active" | "inactive" | "error"`, defaults to `"active"`.

Define icon `fill` and `opacity` aligned with material design [icon color][icon-color] guidelines.

### `shade`

`"on-light" | "on-dark"`, defaults to `"on-light"`.

Define icon `fill` and `opacity` aligned with material design [icon color][icon-color] guidelines.

### `fill`

`string`, defaults to `#000000` or `#FFFFFF` depends on `state` and `shade` props.

Define icon's color, by default depends on material design [icon color][icon-color] guidelines.

Examples: `"rgb(255, 255, 0)"`, `"rgba(0, 255, 0, 0.3)"`, `"#000"`, `"#000000"`

### `opacity`

`string`, default to `".54"` or `".7"` depends on on `state` and `shade` props.

Defines icon's opacity, by default depends on material design [icon color][icon-color] guidelines.

Examples: `"1"`, `".87"`, `".54"`

### `title`

`string`

To be complaint with WAI-ARIA all semantic icons (e.g. without followed text, like FABs, menu icons, etc) should contains alternative text specified in title prop related to provided action (see [accessibility](#decorative-and-semantic-icons) for details).

Examples: `"Edit settings"`, `"Create new order"`

### `component`

`string | React Class | React pure function | React Fragment`, defaults to `"svg"`.

The icon component prop can be either a tag name string (such as `"div"` or `"span"`), a React component type (a class or a function), or a React fragment type. By default SVG icons renders as a SVG HTML Element DOM node.

Examples: `"div"`, `"span"`, `React.Fragment`

### `theme`

`"filled" | "outlined" | "rounded" | "sharp" | "two-tone"`, defaults to `"filled"`

Specified icon theme used for rendering. Only icon classes without theme specification on the end supports this property to give you dynamic theme changing on production (see [themed icons][#themed-icons] for details)

## Change Log

This project adheres to [Semantic Versioning][semver].
Every release, along with the migration instructions, is documented on the GitHub [Releases][releases] page.

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/14204888?s=460&v=4" width="100px;"/><br /><sub><b>Eugene Iliyn</b></sub>](https://github.com/eugeneilyin)<br /> [💻](https://github.com/eugeneilyin/mdi-norm/commits?author=eugeneilyin "Code") [📖](https://github.com/eugeneilyin/mdi-norm/commits?author=eugeneilyin "Documentation") [⚠️](https://github.com/eugeneilyin/mdi-norm/commits?author=eugeneilyin "Tests") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification. Contributions of any kind are welcome!

## License

MIT

[issues]: http://htmlpreview.github.com/?https://github.com/eugeneilyin/mdi-norm/blob/master/docs/issues.html
[optimizations]: docs/optimizations.md
[duplicates]: http://htmlpreview.github.io/?https://github.com/eugeneilyin/mdi-norm/blob/master/docs/duplicates.html
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[npm-version-badge]: https://img.shields.io/npm/v/mdi-norm.svg?style=flat
[npm-version]: https://www.npmjs.com/package/mdi-norm
[lib-license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[lib-license]: https://github.com/eugeneilyin/mdi-norm/blob/master/LICENSE
[build-badge]: https://img.shields.io/travis/eugeneilyin/mdi-norm.svg?style=flat
[build]: https://travis-ci.org/eugeneilyin/mdi-norm
[github-watch-badge]: https://img.shields.io/github/watchers/eugeneilyin/mdi-norm.svg?style=social
[github-watch]: https://github.com/eugeneilyin/mdi-norm/watchers
[github-star-badge]: https://img.shields.io/github/stars/eugeneilyin/mdi-norm.svg?style=social
[github-star]: https://github.com/eugeneilyin/mdi-norm/stargazers
[icon-fonts-vs-svg]: https://css-tricks.com/icon-fonts-vs-svg
[ssim]: https://en.wikipedia.org/wiki/Structural_similarity
[camel-case]: https://en.wikipedia.org/wiki/Camel_case
[icon-color]: https://material.io/design/iconography/system-icons.html#color
[icons-in-rtl]: https://google.github.io/material-design-icons/#icons-in-rtl
[google-md-icons]: https://material.io/tools/icons
[semver]: http://semver.org/
[releases]: https://github.com/eugeneilyin/mdi-norm/releases
[all-contributors]: https://github.com/kentcdodds/all-contributors
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-orange.svg?style=flat
[coc]: https://js.foundation/community/code-of-conduct

