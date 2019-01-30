import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBallot } from './FilledBallot'
import { OutlineBallot } from './OutlineBallot'
import { RoundBallot } from './RoundBallot'
import { SharpBallot } from './SharpBallot'
import { TwoToneBallot } from './TwoToneBallot'

export const Ballot = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBallot, OutlineBallot, RoundBallot, SharpBallot, TwoToneBallot)
