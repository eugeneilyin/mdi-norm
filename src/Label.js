import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLabel } from './FilledLabel'
import { OutlineLabel } from './OutlineLabel'
import { RoundLabel } from './RoundLabel'
import { SharpLabel } from './SharpLabel'
import { TwoToneLabel } from './TwoToneLabel'

export const Label = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLabel, OutlineLabel, RoundLabel, SharpLabel, TwoToneLabel)
