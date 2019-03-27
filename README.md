<div align="center">
<h1>Normalized material design system icons</h1>

All material design system SVG icons provided as fixed, normalized, minifed, and de-duplicated React components

</div>

<hr />

[![Build Status][build-badge]][build]
[![npm version][npm-version-badge]][npm-version]
[![npm downloads][npm-downloads-badge]][npm-downloads]
[![GitHub license][lib-license-badge]][lib-license]

[![PRs Welcome][prs-badge]][prs]
[![All Contributors][contributors-badge]](#contributors)
[![Code of Conduct][coc-badge]][coc]
[![Babel Macro][babel-macro-badge]][babel-macros]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]

## The problem

Standart Google material design [SVG icons][google-md-icons] have a lot of drawing issues, unnecessary SVG elements and attributes as well huge amount of duplicates of the same visual icons. Duplicates not even in SVG code but the different SVG code draws the same pixels output. The same issues are present in [@material-ui/icons][material-ui] library.

![filled replay 30 issue][filled-reaply-30-issue]

Check more [issues][issues] and [duplicates][duplicates] (it could takes some time to render html).

## This solution

This `mdi-norm` library allows you to embed material design system SVG icons as React components and ensure that only minimal deduplicated SVG code will be included. No external dependencies used, you can override default component with your own and use any favorite css solution to customize icon styles. As an alternative to `css` customization the `shade` and `state` icon properties provided to handle standart material design icon rendering (active, focused, inactive, or error).

## Table of Contents

* [Installation](#installation)
* [Benefits](#benefits)
* [Fixes and Optimizations](#fixes-and-optimizations)
* [Usage](#usage)
  * [With babel macros](#with-babel-macros)
  * [Direct icons import](#direct-icons-import)
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
* The same codbase is used for all icon duplicates which gives _~40%_ of SVG code reduction in average
* More than 1000 common used SVG code fragments are extracted and deduplicated, which gived you _~30%_ of SVG code reduction additionally
* Dynamic theming support for _filled_, _outline_, _round_, _sharp_, and _two-tone_ icon variants (see [themed icons](#themed-icons))
* No `className` prop used, you can use icons with any css framework, style library or vanilla css
* Accessibility complaint with **WAI-ARIA** (see [decorative and semantic icons](#decorative-and-semantic-icons))
* Own optimized rendering **NOT** based on `React.PureComponent` or `_pure` from recompose (both approaches are ineffective for icons because always re-render even if props were not changed due to internal createElement calls for the `children` prop)
* Your SVG icons will be included into bundle, which is not require separate icon-font file request and load
* React components code is optimized to reduce a bundle overhead (special pure function annotations, code reusage, tiny helpers)
* All [benefits][icon-fonts-vs-svg] of **Inline SVG** compared to **Icon Fonts**

## Fixes and Optimizations

Compared to the official Google system icon set the next fixes, normalization, minification, and de-duplications provided:

* SVG code fixes: hardcoded opacity, whole-area-filled rectangles, hardcoded fill color, etc. (see all fixed issues [here][issues])
* Removed all elements and attributes not related to rendering, reorder attributes, flattening groups (see all 5,421 optimizations [here][optimizations])
* Deep `<path>` elements draw commands elimination by removing all commands not involved in pixels rendering
* Identified 1,994 duplicates (about ~38%, details [here][duplicates]) in 5,220 icons based on:
  * Duplicates from equal SVG-code after clearing, normalization, and reordering of SVG elements and attributes
  * Duplicates from the same pixels rendering provided by the _different_ SVG-code
  * Duplicates from [Structural Similarity (SSIM)][ssim] cross-validation and compare
  * Duplicates from Visual Similarity computation, sorting and cross-validation for the rest of unique icons
* All duplicated icons use the **most compact** single SVG-code variant
* Manual SVG-code fixes for cases where render coordinates are not pixel-aligned with Google material design icon keylines
* Lot of common SVG code fragments were extracted into separate file to gives you ~30% SVG code elimination

## Usage

Every icon name is prefixed with one of five available themes (`Filled`, `Outline`, `Round`, `Sharp`, or `TwoTone`)  followed by the original name in [Camel Case][camel-case] notation. 

For example original `kitchen` icon from **filled** theme becomes `FilledKitchen`.
Another example is `fitness_center` icon from **two-tone** theme is exported as `TwoToneFitnessCenter` and so on.

If you omit prefix and use direct icon name (like `FitnessCenter` in the example above) then used theme can be specified by the `theme` prop. See [themed icons](#themed-icons) for details.

### With Babel macros

To have the best development experience the [Babel Macros][babel-macros] is provided with this library. This makes possible to run Babel transforms without changing a Babel config (the Create React App v2 is already contains babel macros in .babelc file).

Add babel-macros with yarn:
```
yarn add -dev babel-plugin-macros
```

Or with with npm:
```
npm install --save-dev babel-plugin-macros
```

Then add `babel-plugin-macros` **to the top** of the used babel plugins:

```
  options: {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      ...
    ],
    plugins: [
      'babel-plugin-macros',
      ...other plugins...
    ]  
  }
```

Now you can use `mdi-norm/macro` and all necessary icon imports will be embed into js code **automatically**, you will get a lot of syntactic sugar to specify icons which will be transpiled before compilation. All you need is to add macro to your import section:

```jsx
import i from 'mdi-norm/macro'
```

Or if you have to use CommonJS approach:

```jsx
const i = require("mdi-norm/macro");
```

Then place any icons in your code and **all import/requires** will be added **automatically**.
For example the `missed_video_call` icon can be specified by the next syntax contructions (choose you preferred way):

```jsx
import i from 'mdi-norm/macro'

// As a string literal
i`missed_video_call`({theme: "sharp", size: "2em"})
i`filled-missed-video-call`
i`SharpMissedVideoCall`

// As a JSX tag with icon name

// With underscore (standart icon name)
<i className="material-icons" theme="ouline">missed_video_call</i>

// With spaces
<i className="icon" size={48}>    filled missed video call  </i>

// With dashes
<i className="icon" size={48}>filled-missed-video-call</i>

// With cames case notation
<i shade="on-light" state="error">TwoToneMissedVideoCall</i>

// As a self-closed tag with the name property
<i name="missed_video_call" theme="two-tone" />
<i name="outline-missed-video-call" title="Missed call" />

// As a function call
i('TwoTone missed-video_call', {className: 'material-icon', shade: 'on-dark', state: 'inactive'});
```

All the examples above will be transpiled to `<MissedVideoCall />` component and next import will be added:
```jsx
import { MissedVideoCall } from 'mdi-norm/es/MissedVideoCall'

// or in you specifies macros as CommonJS required
const MissedVideoCall = require("mdi-norm/lib/MissedVideoCall");
```

By default all used icons will be transipled into JSX tags, but if you want to use Icon component name directly add `@`-sign prefix to the icon name. In this case the direct icon function will be placed, not transpiled into JSX tag (this is usefull to pass icons as props). For example:

```jsx
import React from 'react'
import { render } from 'react-dom'
import i from 'mdi-norm/macro'

const WarningButton = ({icon: Icon, title}) =>
  <button>
    <Icon color="red" size={32}/>
    {title}
  </button>

render(<WarningButton icon={i`@Cake`} title='Eat me!'/>, document.getElementById('root'))
```

> Note: With this macros you can easily migrate to SVG from your icon fonts without change JSX tags code base:
> ```jsx
> <i className="material-icons">star</i>
> ``` 

> Note: You can use any name for JSX tag instead of `i` the `Icon`, or `MDI` or anything else is also supported.

```jsx
import Icon from 'mdi-norm/macro'
...

export const MyComponent = ({text}) => (
  <div>
    <Icon name="sharp-location-searching" className="icon"/>
    My Component
  </div>);
```

### Direct icons import

If you don't want to use `mdi-norm/macro` and place each used icon import manually use direct import of required ES icon files from `mdi-norm/es/` path:

> Note: Pay attention to brackets, default import is not used

```jsx
import { Mood } from 'mdi-norm/es/IconMood'
import { TwoToneRoomService } from 'mdi-norm/es/TwoToneRoomService'
import { RoundRoomService } from 'mdi-norm/es/RoundRoomService'

<Mood theme="sharp" />
<TwoToneRoomService />
<RoundeRoomService />
```

You also could use `mdi-norm` package directly for icons import, but this can slow down bundle compilation time.
Also this require tree shaking of your bundler (Webpack/Rollup has such feature) or all of 6,264 icons will be included.

```jsx
// Import concrete icons from package (not recomended, use direct import)
import { People, TwoToneSpa, RoundCake } from 'mdi-norm'

<People theme="sharp" />
<TwoToneSpa />
<RoundCake />;
```

You can take **CommonJS** classes from `mdi-norm/lib/` path:

```jsx
const { Mood } = require('mdi-norm/lib/Mood');
const { TwoToneRoomService } = require('mdi-norm/lib/TwoToneRoomService');
const { RoundRoomService } = require('mdi-norm/lib/RoundRoomService');

<Mood theme="outline" />
<TwoToneRoomService />
<RoundRoomService />
```

Also you can import all 6,264 icon-classes into your bundle:

```jsx
import * as Icons from 'mdi-norm'

<Icons.Spa theme="outline"/>
<Icons.TwoToneStar size={48} style={{color: 'green'}}/>
```

### Customization

You can change any SVG HTML element property to adjust icon rendering.
To specify `width` and `height` props simultaneously the `size` prop is used (the default size is `24px`).

```jsx
// size property change
<FilledSchool size={48} />

// is equal to 
<FilledSchool width={48} height={48} />

// you can use not only numbers
<FilledSchool size="3rem" />
```

To be aligned with material design [icon color][icon-color] guidelines the `fill` and `opacity` SVG props can be specified by `state` and `shade` prop values:

| | `shade="on-light"` | `shade="on-dark"` |
| :--- | :---- | :---- |
| `state="focused"` | `opacity=".87"`, `fill="#000000"` | `opacity="1"`, `fill="#FFFFFF"` |
| `state="active"` | `opacity=".54"`, `fill="#000000"` | `opacity=".7"`, `fill="#FFFFFF"` |
| `state="inactive"` | `opacity=".38"`, `fill="#000000"` | `opacity=".5"`, `fill="#FFFFFF"` |
| `state="error"` | `opacity="1"`, `fill="#B00020"` | `opacity="1"`, `fill="#FF6E6E"` |

### Styling

Use any `className` or `style` props to override icon fill, opacity with any of your favorite css framework or library:

By default the `fill` SVG property is queal to `currentColor` - this allows you to change icon color by specifing `color` css property, instead of `fill`.

```css
/* some .css file */
.people-icon {
  color: 'blue';
}
```

```jsx
import i from 'mdi-norm/macro'
...
<i className="people-icon">sharp people</i>
```

But you can use `fill` property directly:

```css
/* some .css file */
.people-icon {
  fill: 'blue';
}
```

The same approach is applied to override the default icon opacity or any other SVG HTML Element property:

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

### Decorative and Semantic icons

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
For example `<RoundCake title="Add birthday reminder" ... />` icon will be rendered as:

```jsx
<svg role="img" aria-label="title" ...>
  <title>Add birthday reminder</title>
  <path d="..." />
<svg/>  
```

### Pass icons as props

If you want to pass icon as prop to another component or function for rendering make sure that you use upper case first letter in prop name to distinct icon from from standart JSX HTML elements:

```jsx
import { SharpCake } from 'mdi-norm/es/SharpCake'

const MyCoolLink = ({icon: Icon, text, href}) => <a href={href}><Icon />{text}</a>;

<MyCoolLink icon={SharpCake} text="Cool button" href="/cool" />
```

### Themed icons

By default if no icon theme postfix provided all five themes exported in one React component (usually this is less then five different SVG code bases, due to many existing dulicates of the same icon in different themes).

This gives you an ability to change icon themes dynamically with the `theme` prop:

| Icon | Equal themed icon | 
| :--- | :--- |
| `<FilledStar />` | `<Star theme="filled" />` or `<Star />` (by default) |
| `<OutlineStar />` | `<Star theme="outline" />` |
| `<RoundStar />` | `<Star theme="round" />` |
| `<SharpStar />` | `<Star theme="sharp" />` |
| `<TwoToneStar />` | `<Star theme="two-tone" />` |

You can explore all five themes on the official Google's material design [icon set][google-md-icons].

> Note: Three exceptions exist for direct import of icons: use `<Icon4K />` instead of `<4K />`, `<Icon360 />` instead of `<360 />`, and `<Icon3DRotation />` instead of `<3DRotation />`. In all other cases you can use direct camel-cased icon name as is (e.g. `<Star />`, `<People />`, `<InsertComment />`). If you use `babel-macros` then you can omit this rule and use `360`, `4K`, and `3DRotation` as icon name directly without prefix.

## Properties

All icons internally use tiny (2360 bytes minified, 858 bytes gzipped) `<Icon />` component:

### `size`

`number | string`, defaults to `24`.

The icon size used to set `width` and `height` simultaneously. You can use 20 pixels for dense layouts.

Examples: `48`, `"16px"`, `"2em"`

### `state`

`"focused" | "active" | "inactive" | "error"`

Define icon `fill` and `opacity` aligned with material design [icon color][icon-color] guidelines.

### `shade`

`"on-light" | "on-dark"`

Define icon `fill` and `opacity` aligned with material design [icon color][icon-color] guidelines.

### `fill`

`string`, defaults to `"currentColor"`.

Define icon's color, by default equals to css `color` prop.
Can be customized by the `state` and `shade` props.

Examples: `"rgb(255, 255, 0)"`, `"rgba(0, 255, 0, 0.3)"`, `"#000"`, `"#000000"`

### `opacity`

`string`, defaults to `undefined`, can be customized by the `state` and `shade` props.

Defines icon's opacity, depends on material design [icon color][icon-color] guidelines.

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

`"filled" | "outline" | "round" | "sharp" | "two-tone"`, defaults to `"filled"`

Specified icon theme used for rendering. Only icon classes without theme prefixes supports this property to give you dynamic theme changing on production (see [themed icons][#themed-icons] for details)

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
[babel-macro-badge]: https://img.shields.io/badge/babel--macro-%F0%9F%8E%A3-f5da55.svg?style=flat
[coc]: https://js.foundation/community/code-of-conduct
[contributors-badge]: https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat
[npm-downloads-badge]: https://img.shields.io/npm/dm/mdi-norm.svg?style=flat
[npm-downloads]: https://www.npmjs.com/package/mdi-norm
[babel-macros]: https://github.com/kentcdodds/babel-plugin-macros
[material-ui]: https://github.com/mui-org/material-ui/tree/next/packages/material-ui-icons
[filled-reaply-30-issue]: https://raw.githubusercontent.com/eugeneilyin/mdi-norm/master/docs/compare-filled-replay-30.png
