import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRadioButtonUnchecked } from './FilledRadioButtonUnchecked'
import { OutlineRadioButtonUnchecked } from './OutlineRadioButtonUnchecked'
import { RoundRadioButtonUnchecked } from './RoundRadioButtonUnchecked'
import { SharpRadioButtonUnchecked } from './SharpRadioButtonUnchecked'
import { TwoToneRadioButtonUnchecked } from './TwoToneRadioButtonUnchecked'

export const RadioButtonUnchecked = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRadioButtonUnchecked, OutlineRadioButtonUnchecked, RoundRadioButtonUnchecked, SharpRadioButtonUnchecked, TwoToneRadioButtonUnchecked)
