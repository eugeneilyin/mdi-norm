import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCake } from './FilledCake'
import { OutlineCake } from './OutlineCake'
import { RoundCake } from './RoundCake'
import { SharpCake } from './SharpCake'
import { TwoToneCake } from './TwoToneCake'

export const Cake = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCake, OutlineCake, RoundCake, SharpCake, TwoToneCake)
