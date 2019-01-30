import { createThemedIcon } from './utils/createThemedIcon'
import { FilledInput } from './FilledInput'
import { OutlineInput } from './OutlineInput'
import { RoundInput } from './RoundInput'
import { SharpInput } from './SharpInput'
import { TwoToneInput } from './TwoToneInput'

export const Input = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledInput, OutlineInput, RoundInput, SharpInput, TwoToneInput)
