import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCastConnected } from './FilledCastConnected'
import { OutlineCastConnected } from './OutlineCastConnected'
import { RoundCastConnected } from './RoundCastConnected'
import { SharpCastConnected } from './SharpCastConnected'
import { TwoToneCastConnected } from './TwoToneCastConnected'

export const CastConnected = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCastConnected, OutlineCastConnected, RoundCastConnected, SharpCastConnected, TwoToneCastConnected)
