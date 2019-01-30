import { createThemedIcon } from './utils/createThemedIcon'
import { FilledColorLens } from './FilledColorLens'
import { OutlineColorLens } from './OutlineColorLens'
import { RoundColorLens } from './RoundColorLens'
import { SharpColorLens } from './SharpColorLens'
import { TwoToneColorLens } from './TwoToneColorLens'

export const ColorLens = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledColorLens, OutlineColorLens, RoundColorLens, SharpColorLens, TwoToneColorLens)
