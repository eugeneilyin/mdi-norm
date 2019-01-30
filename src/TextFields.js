import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTextFields } from './FilledTextFields'
import { OutlineTextFields } from './OutlineTextFields'
import { RoundTextFields } from './RoundTextFields'
import { SharpTextFields } from './SharpTextFields'
import { TwoToneTextFields } from './TwoToneTextFields'

export const TextFields = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTextFields, OutlineTextFields, RoundTextFields, SharpTextFields, TwoToneTextFields)
