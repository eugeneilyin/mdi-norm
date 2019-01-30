import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPhone } from './FilledPhone'
import { OutlinePhone } from './OutlinePhone'
import { RoundPhone } from './RoundPhone'
import { SharpPhone } from './SharpPhone'
import { TwoTonePhone } from './TwoTonePhone'

export const Phone = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPhone, OutlinePhone, RoundPhone, SharpPhone, TwoTonePhone)
