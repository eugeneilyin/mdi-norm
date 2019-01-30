import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCropFree } from './FilledCropFree'
import { OutlineCropFree } from './OutlineCropFree'
import { RoundCropFree } from './RoundCropFree'
import { SharpCropFree } from './SharpCropFree'
import { TwoToneCropFree } from './TwoToneCropFree'

export const CropFree = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCropFree, OutlineCropFree, RoundCropFree, SharpCropFree, TwoToneCropFree)
