import { createThemedIcon } from './utils/createThemedIcon'
import { FilledIndeterminateCheckBox } from './FilledIndeterminateCheckBox'
import { OutlineIndeterminateCheckBox } from './OutlineIndeterminateCheckBox'
import { RoundIndeterminateCheckBox } from './RoundIndeterminateCheckBox'
import { SharpIndeterminateCheckBox } from './SharpIndeterminateCheckBox'
import { TwoToneIndeterminateCheckBox } from './TwoToneIndeterminateCheckBox'

export const IndeterminateCheckBox = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledIndeterminateCheckBox, OutlineIndeterminateCheckBox, RoundIndeterminateCheckBox, SharpIndeterminateCheckBox, TwoToneIndeterminateCheckBox)
