# Material design icons - Normalized

`mdi-norm` is a fixed, normalized, minifed, and deduplicated Google's material design [system](https://material.io/design/iconography/system-icons.html) **SVG** [icon set](https://material.io/tools/icons/) for [**React**](https://reactjs.org/).

[![npm version](https://img.shields.io/npm/v/mdi-norm.svg?style=flat)](https://www.npmjs.com/package/mdi-norm)
[![npm downloads](https://img.shields.io/npm/dm/mdi-norm.svg?style=flat)](https://www.npmjs.com/package/mdi-norm)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/eugeneilyin/mdi-norm/blob/master/LICENSE)

## Installation

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
* The same smallest code used for all icon duplicates which gives ~40% SVG code reduction in average
* Code optimized to reduce bundle overhead (special pure function annotations, code reusage, tiny helpers, etc.)
* Dynamic theming support for _filled_, _outlined_, _rounded_, _sharp_, and _two-tone_ icon variants (see Themed Icons section below)
* No `className` prop usage, you can use icons with any css framework (e.g. emotion-js, fela, etc.) or vanilla css
* Own optimized rendering **NOT** based on `React.PureComponent` or `_pure` from recompose (both approaches are ineffective for icons because always re-render even if props were not changed due to internal createElement calls for `children` prop)
* All [benefits](https://css-tricks.com/icon-fonts-vs-svg/) of **Inline SVG** compared to **Icon Fonts**
* Your SVG icons will be included into bundle, which is not require separate icon-font file request and load
* Accessibility complaint with **WAI-ARIA** (see **decorative** and **semantic** icons section below)
* You can do any animations with whole SVG icon or any path of it

## Fixes and optimizations
Compared to official Google system icon set the next fixes, normalization, minification, and deduplications provided:
* [48 direct SVG content fixes](docs/issues.html) related to icons rendering (hardcoded opacity, whole-area-filled rectangles, hardcoded fill color, etc)
* Removed all SVG elements and attributes not related to rendering, see all 5,421 changes [here](docs/fixes.md)
* All group elements removed by unfolding nested groups elements to the SVG root element
* Attributes reordered to have the same normalized structure across all SVG files
* Identified 1,966 duplicates (~38%, details [here](docs/duplicates.html)) in 5,220 icons based on:
  * Duplicates from equal SVG-code after clearing, normalization, and reordering of SVG elements and attributes
  * Duplicates from same pixels rendering for _different_ SVG-code
  * Duplicates from [Structural Similarity (SSIM)](https://en.wikipedia.org/wiki/Structural_similarity) cross-validation and compare
  * Duplicates from Visual Similarity computation, sorting and cross-validation for the rest of unique icons for deeper duplicated identification
* All duplicated icons use only one **most compact** SVG code representation
* Manual SVG-code fixes for cases where render coordinates are not pixel-aligned with Google Material Design icon keylines
> Note: If you take all 1,044 icons from any of five themes after deduplication - icons takes about ~55,568 bytes of GZipped size which is comparable with icon-font woff (~57,620 bytes) of woff2 (~44,300 bytes) file sizes. Considering that you never require all of provided 1,044 icons your bundle size will be much smaller and better optimized then any icon-font solution.

## Usage

Every icon name is prefixed with `Icon` followed by the original name in [Camel Case](https://en.wikipedia.org/wiki/Camel_case) notation with one of five **optional** theme postfixes at the end.
For example original `kitchen` icon from **filled** theme becomes `IconKitchenFilled`, another example is `fitness_center` icon from **two-tone** theme is exported as `IconFitnessCenterTwoTone` and so on.
> Note: One name exception exist: insert_chart_outline**d** icon is named as `IconInsertChartOutline` (without `d` at the end)

The best way for fast compilation time and tree shaking, smallest bundle overhead is to use direct import of required ES icon files (from `mdi-norm/es/` path)
> Note: Pay attention to brackets, default import is not used for code size and performance optimization

```jsx
import React from 'react'
import { IconMood as Mood } from 'mdi-norm/es/IconMood'
import { IconRoomServiceTwoTone } from 'mdi-norm/es/IconRoomServiceTwoTone'
import { IconRoomServiceRounded } from 'mdi-norm/es/IconRoomServiceRounded'

<Mood theme="sharp" />
<IconRoomServiceTwoTone />
<IconRoomServiceRounded />
```

You also could use `mdi-norm` package directly for icons import, but this could slow down bundle compilation time, usage of direct import specified above is preferred.
Also this require tree shaking of your bundler (Webpack/Rollup has such feature) or _all **6,264** icon classes_ will be included.

```jsx
// Import concrete icons from package (not recomended, use direct import)
import React from 'react'
import { IconPeople as People, IconSpaTwoTone, IconCakeRounded } from 'mdi-norm'

<People theme="sharp" />
<IconSpaTwoTone />
<IconCakeRounded />;
```

If you need **CommonJS** modules take them from `mdi-norm/lib/` path:

```jsx
const React = require('react');
const { IconMood: Mood } = require('mdi-norm/lib/IconMood');
const { IconRoomServiceTwoTone } = require('mdi-norm/lib/IconRoomServiceTwoTone');
const { IconRoomServiceRounded } = require('mdi-norm/lib/IconRoomServiceRounded');

<Mood theme="outlined" />
<IconRoomServiceTwoTone />
<IconRoomServiceRounded />
```

Also you can import _all **6,264** icon classes_ into your bundle (**NOT** recomended)
```jsx
// Import all icons from package (not recomended at all)
import React from 'react'
import * as MDI from 'mdi-norm'

<MDI.IconSpaTwoTone />
```

### Customization

You can change any SVG HTML element property to adjust icon rendering.
To specify `width` and `height` props simultaneously the `size` prop was added (equals 24 pixels by default).

```jsx
// size property change
<IconSchoolFilled size={48} />

// is equal to 
<IconSchoolFilled width={48} height={48} />

// you can use not only numbers
<IconSchoolFilled size="3rem" />
```

To be aligned with [Material Design icon color guidelines](https://material.io/design/iconography/system-icons.html#color) the default `fill` and `opacity` icons props are depends on additional `state` and `shade` props:

| | `shade="on-light"` (default) | `shade="on-dark"` |
| :--- | :---- | :---- |
| `state="focused"` | `opacity=".87"`, `fill="#000000"` | `opacity="1"`, `fill="#FFFFFF"` |
| `state="active"` (default) | `opacity=".54"`, `fill="#000000"` | `opacity=".7"`, `fill="#FFFFFF"` |
| `state="inactive"` | `opacity=".38"`, `fill="#000000"` | `opacity=".5"`, `fill="#FFFFFF"` |
| `state="error"` | `opacity="1"`, `fill="#B00020"` | `opacity="1"`, `fill="#FF6E6E"` |

### Styling

Use any `className` or `style` props to override icon color / opacity with any your favorite css framework or library (like emotion-js, fela, etc.)

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

The same approach applied to override default icon opacity or any other property:

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

If you want your icon to be colored as the outer text use `currentColor` value for fill property globally or for specific class:

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

For RTL (Right-To-Left) icons rendering you can use the next css for some `icon` class:

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

The icons required for RTL transformation are listed [here](https://google.github.io/material-design-icons/#icons-in-rtl).

### Accessibility: Decorative and Semantic icons

**Decorative** icons are only being used for visual or branding reinforcement. 
If they were removed from the page, users would still understand and be able to use your page. 

**Semantic** icons (like FABs, menu items as icons only, icon buttons, etc.) are ones that you’re using to convey meaning, rather than just pure decoration.
This includes icons without text next to them used as interactive controls — buttons, form elements, toggles, etc.

By default all icons are rendered as decorative icons with ``aria-hidden`` attribute added to svg HTML element:

```jsx
<svg aria-hidden ...>
  <path d="..." />
<svg/>  
```

If your icons have semantic meaning, you’ll need to manually specify `title` prop with related meaning.
For example `<IconCakeRounded title="Add birthday reminder" ... />` icon will be rendered as:

```jsx
<svg role="img" aria-label="title" ...>
  <title>Add birthday reminder</title>
  <path d="..." />
<svg/>  
```
### Pass Icons as props

If you want to pass icon as prop to another component or function for rendering make sure that you use upper case first letter in prop name to distinct from standart HTML components:

```jsx
import React from 'react'
import { IconCakeSharp } from 'mdi-norm/es/IconCakeSharp'

const MyCoolLink = ({icon: Icon, text, href}) => <a href={href}><Icon />{text}</a>;

<MyCoolLink icon={IconCakeSharp} text="Cool button" href="/cool" />
```

### Themed icons

By default if no icon theme postfix provided all five themes exported in one React component.
This gives you an ability to change icon themes dynamically with `theme` prop:

| Icon | Dynamically Themed Icon | 
| :--- | :--- |
| `<Icon3DRotationFilled />` | `<Icon3DRotation theme="filled" />` or `<Icon3DRotation />` (by default) |
| `<Icon3DRotationOutlined />` | `<Icon3DRotation theme="outlined" />` |
| `<Icon3DRotationRounded />` | `<Icon3DRotation theme="rounded" />` |
| `<Icon3DRotationSharp />` | `<Icon3DRotation theme="sharp" />` |
| `<Icon3DRotationTwoTone />` | `<Icon3DRotation theme="two-tone" />` |

You can explore all five themes on the official [Google icon set](https://material.io/tools/icons/?icon=fitness_center&style=baseline).

## Icon Props

All icons internally use tiny `<Icon />` component:

| Prop | Supported Types | Default  | Examples | Description |
| :--- | :--- | :--- | :--- | :--- |
| `size` | `number`, `string` | `24` | `48`, `'16px'`, `'2em'` | The icon size. MD guidelines recomends 24 by default and 20 for dense layouts |
| `state` | `string` | `active` | `focused`, `active`, `inactive`, `error` | Define default icon **fill** and **opacity** according to guidelines (see Customization section) |
| `shade` | `string` | `on-light` | `on-light`, `on-dark` | Define default icon **fill** and **opacity** according to guidelines (see Customization section) |
| `fill` | `string` | `#000000` or `#FFFFFF` | `rgb()`, `rgba()`, `#000`, `#000000` | Icon color by default `#000000` for `on-light` theme shade and `#FFFFFF` for `on-dark` theme shade (see states) |
| `title` | `string` | | `'Edit settings'` | To be **WAI-ARIA** complaint all semantic icons (e.g. without followed text, like FABs, menu icons, etc) should contains text alternative specified in title prop related to provided action |
| `component` | `string`, React class, React pure function, React fragment | `'svg'` | `'div'`, `'span'`, `React.Fragment` | The icon component prop can be either a tag name string (such as `'div'` or `'span'`), a React component type (a class or a function), or a React fragment type |
| `theme` | `string` | `filled` | `filled`, `outlined`, `rounded`, `sharp`, `two-tone` | Icon theme only used by icon names without theme postfix when you want to import all five themes and change theme dynamically (see themed icons) |

## Change Log

This project adheres to [Semantic Versioning](http://semver.org/).  
Every release, along with the migration instructions, is documented on the GitHub [Releases](https://github.com/eugeneilyin/mdi-norm/releases) page.

## Author

Eugene Iliyn <eugene.ilyin@gmail.com>

## License

MIT
