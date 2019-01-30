import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCommute } from './FilledCommute'
import { OutlineCommute } from './OutlineCommute'
import { RoundCommute } from './RoundCommute'
import { SharpCommute } from './SharpCommute'
import { TwoToneCommute } from './TwoToneCommute'

export const Commute = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCommute, OutlineCommute, RoundCommute, SharpCommute, TwoToneCommute)
