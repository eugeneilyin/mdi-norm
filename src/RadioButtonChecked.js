import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRadioButtonChecked } from './FilledRadioButtonChecked'
import { OutlineRadioButtonChecked } from './OutlineRadioButtonChecked'
import { RoundRadioButtonChecked } from './RoundRadioButtonChecked'
import { SharpRadioButtonChecked } from './SharpRadioButtonChecked'
import { TwoToneRadioButtonChecked } from './TwoToneRadioButtonChecked'

export const RadioButtonChecked = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRadioButtonChecked, OutlineRadioButtonChecked, RoundRadioButtonChecked, SharpRadioButtonChecked, TwoToneRadioButtonChecked)
