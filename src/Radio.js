import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRadio } from './FilledRadio'
import { OutlineRadio } from './OutlineRadio'
import { RoundRadio } from './RoundRadio'
import { SharpRadio } from './SharpRadio'
import { TwoToneRadio } from './TwoToneRadio'

export const Radio = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRadio, OutlineRadio, RoundRadio, SharpRadio, TwoToneRadio)
