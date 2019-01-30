import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPalette } from './FilledPalette'
import { OutlinePalette } from './OutlinePalette'
import { RoundPalette } from './RoundPalette'
import { SharpPalette } from './SharpPalette'
import { TwoTonePalette } from './TwoTonePalette'

export const Palette = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPalette, OutlinePalette, RoundPalette, SharpPalette, TwoTonePalette)
