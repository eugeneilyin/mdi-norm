import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSpa } from './FilledSpa'
import { OutlineSpa } from './OutlineSpa'
import { RoundSpa } from './RoundSpa'
import { SharpSpa } from './SharpSpa'
import { TwoToneSpa } from './TwoToneSpa'

export const Spa = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSpa, OutlineSpa, RoundSpa, SharpSpa, TwoToneSpa)
