import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAccessAlarms } from './FilledAccessAlarms'
import { OutlineAccessAlarms } from './OutlineAccessAlarms'
import { RoundAccessAlarms } from './RoundAccessAlarms'
import { SharpAccessAlarms } from './SharpAccessAlarms'
import { TwoToneAccessAlarms } from './TwoToneAccessAlarms'

export const AccessAlarms = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAccessAlarms, OutlineAccessAlarms, RoundAccessAlarms, SharpAccessAlarms, TwoToneAccessAlarms)
