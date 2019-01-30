import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPageview } from './FilledPageview'
import { OutlinePageview } from './OutlinePageview'
import { RoundPageview } from './RoundPageview'
import { SharpPageview } from './SharpPageview'
import { TwoTonePageview } from './TwoTonePageview'

export const Pageview = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPageview, OutlinePageview, RoundPageview, SharpPageview, TwoTonePageview)
