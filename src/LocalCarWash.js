import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalCarWash } from './FilledLocalCarWash'
import { OutlineLocalCarWash } from './OutlineLocalCarWash'
import { RoundLocalCarWash } from './RoundLocalCarWash'
import { SharpLocalCarWash } from './SharpLocalCarWash'
import { TwoToneLocalCarWash } from './TwoToneLocalCarWash'

export const LocalCarWash = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalCarWash, OutlineLocalCarWash, RoundLocalCarWash, SharpLocalCarWash, TwoToneLocalCarWash)
