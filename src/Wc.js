import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWc } from './FilledWc'
import { OutlineWc } from './OutlineWc'
import { RoundWc } from './RoundWc'
import { SharpWc } from './SharpWc'
import { TwoToneWc } from './TwoToneWc'

export const Wc = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWc, OutlineWc, RoundWc, SharpWc, TwoToneWc)
