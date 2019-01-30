import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSupervisedUserCircle } from './FilledSupervisedUserCircle'
import { OutlineSupervisedUserCircle } from './OutlineSupervisedUserCircle'
import { RoundSupervisedUserCircle } from './RoundSupervisedUserCircle'
import { SharpSupervisedUserCircle } from './SharpSupervisedUserCircle'
import { TwoToneSupervisedUserCircle } from './TwoToneSupervisedUserCircle'

export const SupervisedUserCircle = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSupervisedUserCircle, OutlineSupervisedUserCircle, RoundSupervisedUserCircle, SharpSupervisedUserCircle, TwoToneSupervisedUserCircle)
