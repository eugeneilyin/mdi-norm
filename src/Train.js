import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTrain } from './FilledTrain'
import { OutlineTrain } from './OutlineTrain'
import { RoundTrain } from './RoundTrain'
import { SharpTrain } from './SharpTrain'
import { TwoToneTrain } from './TwoToneTrain'

export const Train = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTrain, OutlineTrain, RoundTrain, SharpTrain, TwoToneTrain)
