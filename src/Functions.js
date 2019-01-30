import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFunctions } from './FilledFunctions'
import { OutlineFunctions } from './OutlineFunctions'
import { RoundFunctions } from './RoundFunctions'
import { SharpFunctions } from './SharpFunctions'
import { TwoToneFunctions } from './TwoToneFunctions'

export const Functions = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFunctions, OutlineFunctions, RoundFunctions, SharpFunctions, TwoToneFunctions)
