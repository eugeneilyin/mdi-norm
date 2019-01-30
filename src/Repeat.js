import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRepeat } from './FilledRepeat'
import { OutlineRepeat } from './OutlineRepeat'
import { RoundRepeat } from './RoundRepeat'
import { SharpRepeat } from './SharpRepeat'
import { TwoToneRepeat } from './TwoToneRepeat'

export const Repeat = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRepeat, OutlineRepeat, RoundRepeat, SharpRepeat, TwoToneRepeat)
