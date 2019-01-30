import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTurnedInNot } from './FilledTurnedInNot'
import { OutlineTurnedInNot } from './OutlineTurnedInNot'
import { RoundTurnedInNot } from './RoundTurnedInNot'
import { SharpTurnedInNot } from './SharpTurnedInNot'
import { TwoToneTurnedInNot } from './TwoToneTurnedInNot'

export const TurnedInNot = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTurnedInNot, OutlineTurnedInNot, RoundTurnedInNot, SharpTurnedInNot, TwoToneTurnedInNot)
