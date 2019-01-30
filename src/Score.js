import { createThemedIcon } from './utils/createThemedIcon'
import { FilledScore } from './FilledScore'
import { OutlineScore } from './OutlineScore'
import { RoundScore } from './RoundScore'
import { SharpScore } from './SharpScore'
import { TwoToneScore } from './TwoToneScore'

export const Score = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledScore, OutlineScore, RoundScore, SharpScore, TwoToneScore)
