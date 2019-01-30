import { createThemedIcon } from './utils/createThemedIcon'
import { FilledExplicit } from './FilledExplicit'
import { OutlineExplicit } from './OutlineExplicit'
import { RoundExplicit } from './RoundExplicit'
import { SharpExplicit } from './SharpExplicit'
import { TwoToneExplicit } from './TwoToneExplicit'

export const Explicit = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledExplicit, OutlineExplicit, RoundExplicit, SharpExplicit, TwoToneExplicit)
