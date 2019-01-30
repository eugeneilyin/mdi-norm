import { createThemedIcon } from './utils/createThemedIcon'
import { FilledComputer } from './FilledComputer'
import { OutlineComputer } from './OutlineComputer'
import { RoundComputer } from './RoundComputer'
import { SharpComputer } from './SharpComputer'
import { TwoToneComputer } from './TwoToneComputer'

export const Computer = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledComputer, OutlineComputer, RoundComputer, SharpComputer, TwoToneComputer)
