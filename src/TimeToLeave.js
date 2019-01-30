import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTimeToLeave } from './FilledTimeToLeave'
import { OutlineTimeToLeave } from './OutlineTimeToLeave'
import { RoundTimeToLeave } from './RoundTimeToLeave'
import { SharpTimeToLeave } from './SharpTimeToLeave'
import { TwoToneTimeToLeave } from './TwoToneTimeToLeave'

export const TimeToLeave = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTimeToLeave, OutlineTimeToLeave, RoundTimeToLeave, SharpTimeToLeave, TwoToneTimeToLeave)
