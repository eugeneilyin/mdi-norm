import { createThemedIcon } from './utils/createThemedIcon'
import { FilledWorkOff } from './FilledWorkOff'
import { OutlineWorkOff } from './OutlineWorkOff'
import { RoundWorkOff } from './RoundWorkOff'
import { SharpWorkOff } from './SharpWorkOff'
import { TwoToneWorkOff } from './TwoToneWorkOff'

export const WorkOff = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledWorkOff, OutlineWorkOff, RoundWorkOff, SharpWorkOff, TwoToneWorkOff)
