import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFitnessCenter } from './FilledFitnessCenter'
import { OutlineFitnessCenter } from './OutlineFitnessCenter'
import { RoundFitnessCenter } from './RoundFitnessCenter'
import { SharpFitnessCenter } from './SharpFitnessCenter'
import { TwoToneFitnessCenter } from './TwoToneFitnessCenter'

export const FitnessCenter = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFitnessCenter, OutlineFitnessCenter, RoundFitnessCenter, SharpFitnessCenter, TwoToneFitnessCenter)
