import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPortrait } from './FilledPortrait'
import { OutlinePortrait } from './OutlinePortrait'
import { RoundPortrait } from './RoundPortrait'
import { SharpPortrait } from './SharpPortrait'
import { TwoTonePortrait } from './TwoTonePortrait'

export const Portrait = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPortrait, OutlinePortrait, RoundPortrait, SharpPortrait, TwoTonePortrait)
