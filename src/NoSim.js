import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNoSim } from './FilledNoSim'
import { OutlineNoSim } from './OutlineNoSim'
import { RoundNoSim } from './RoundNoSim'
import { SharpNoSim } from './SharpNoSim'
import { TwoToneNoSim } from './TwoToneNoSim'

export const NoSim = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNoSim, OutlineNoSim, RoundNoSim, SharpNoSim, TwoToneNoSim)
