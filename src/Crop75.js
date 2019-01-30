import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCrop75 } from './FilledCrop75'
import { OutlineCrop75 } from './OutlineCrop75'
import { RoundCrop75 } from './RoundCrop75'
import { SharpCrop75 } from './SharpCrop75'
import { TwoToneCrop75 } from './TwoToneCrop75'

export const Crop75 = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCrop75, OutlineCrop75, RoundCrop75, SharpCrop75, TwoToneCrop75)
