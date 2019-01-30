import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTurnedIn } from './FilledTurnedIn'
import { OutlineTurnedIn } from './OutlineTurnedIn'
import { RoundTurnedIn } from './RoundTurnedIn'
import { SharpTurnedIn } from './SharpTurnedIn'
import { TwoToneTurnedIn } from './TwoToneTurnedIn'

export const TurnedIn = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTurnedIn, OutlineTurnedIn, RoundTurnedIn, SharpTurnedIn, TwoToneTurnedIn)
