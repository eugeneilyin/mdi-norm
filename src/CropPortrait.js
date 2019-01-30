import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCropPortrait } from './FilledCropPortrait'
import { OutlineCropPortrait } from './OutlineCropPortrait'
import { RoundCropPortrait } from './RoundCropPortrait'
import { SharpCropPortrait } from './SharpCropPortrait'
import { TwoToneCropPortrait } from './TwoToneCropPortrait'

export const CropPortrait = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCropPortrait, OutlineCropPortrait, RoundCropPortrait, SharpCropPortrait, TwoToneCropPortrait)
