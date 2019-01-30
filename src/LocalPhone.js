import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalPhone } from './FilledLocalPhone'
import { OutlineLocalPhone } from './OutlineLocalPhone'
import { RoundLocalPhone } from './RoundLocalPhone'
import { SharpLocalPhone } from './SharpLocalPhone'
import { TwoToneLocalPhone } from './TwoToneLocalPhone'

export const LocalPhone = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalPhone, OutlineLocalPhone, RoundLocalPhone, SharpLocalPhone, TwoToneLocalPhone)
