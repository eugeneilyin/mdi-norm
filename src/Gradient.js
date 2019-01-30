import { createThemedIcon } from './utils/createThemedIcon'
import { FilledGradient } from './FilledGradient'
import { OutlineGradient } from './OutlineGradient'
import { RoundGradient } from './RoundGradient'
import { SharpGradient } from './SharpGradient'
import { TwoToneGradient } from './TwoToneGradient'

export const Gradient = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledGradient, OutlineGradient, RoundGradient, SharpGradient, TwoToneGradient)
