import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCast } from './FilledCast'
import { OutlineCast } from './OutlineCast'
import { RoundCast } from './RoundCast'
import { SharpCast } from './SharpCast'
import { TwoToneCast } from './TwoToneCast'

export const Cast = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCast, OutlineCast, RoundCast, SharpCast, TwoToneCast)
